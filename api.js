import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();
const env = globalThis.process?.env ?? {};

const app = express();
const PORT = Number(env.PORT || 4000);
const RATE_LIMIT_WINDOW_MS = 10 * 60 * 1000;
const RATE_LIMIT_MAX_REQUESTS = 2;
const BREVO_API_BASE_URL = env.BREVO_API_BASE_URL || 'https://api.brevo.com/v3';
const BREVO_API_KEY = env.BREVO_API_KEY || '';
const BREVO_SENDER_EMAIL = env.BREVO_SENDER_EMAIL || '';
const BREVO_SENDER_NAME = env.BREVO_SENDER_NAME || 'Portfolio Contact';
const CONTACT_TO_EMAIL = env.CONTACT_TO || '';
const CONTACT_TO_NAME = env.CONTACT_TO_NAME || 'Portfolio Owner';
const successfulSendsByIp = new Map();

app.use(cors({ origin: env.CLIENT_ORIGIN || 'http://localhost:5173' }));
app.use(express.json());

const getMissingBrevoConfig = () => {
  const missing = [];
  if (!BREVO_API_KEY) missing.push('BREVO_API_KEY');
  if (!BREVO_SENDER_EMAIL) missing.push('BREVO_SENDER_EMAIL');
  if (!CONTACT_TO_EMAIL) missing.push('CONTACT_TO');
  return missing;
};

const logBrevoError = (context, err) => {
  console.error(`[BREVO] ${context}`, {
    message: err?.message,
    code: err?.code,
    status: err?.status,
    responseBody: err?.responseBody,
    missing: err?.missing,
  });
};

const parseResponseBody = async (response) => {
  const bodyText = await response.text();
  if (!bodyText) return null;

  try {
    return JSON.parse(bodyText);
  } catch {
    return bodyText;
  }
};

const buildBrevoError = (message, extra = {}) => Object.assign(new Error(message), extra);

const getBrevoHeaders = () => ({
  Accept: 'application/json',
  'Content-Type': 'application/json',
  'api-key': BREVO_API_KEY,
});

const sendMailViaBrevo = async ({ name, email, subject, message }) => {
  const missing = getMissingBrevoConfig();
  if (missing.length > 0) {
    throw buildBrevoError('Brevo is not configured', { code: 'E_BREVO_CONFIG', missing });
  }

  const payload = {
    sender: {
      email: BREVO_SENDER_EMAIL,
      name: BREVO_SENDER_NAME,
    },
    to: [
      {
        email: CONTACT_TO_EMAIL,
        name: CONTACT_TO_NAME,
      },
    ],
    replyTo: {
      email,
      name,
    },
    subject: subject ? `[Portfolio] ${subject}` : '[Portfolio] New message',
    textContent: `Name: ${name}\nEmail: ${email}\n\n${message}`,
  };

  const response = await fetch(`${BREVO_API_BASE_URL}/smtp/email`, {
    method: 'POST',
    headers: getBrevoHeaders(),
    body: JSON.stringify(payload),
  });

  const responseBody = await parseResponseBody(response);
  if (!response.ok) {
    throw buildBrevoError('Brevo send email request failed', {
      code: 'E_BREVO_HTTP',
      status: response.status,
      responseBody,
    });
  }

  return responseBody;
};

const verifyBrevoConnection = async () => {
  const missing = getMissingBrevoConfig();
  if (missing.length > 0) {
    logBrevoError('Skipping verification, missing configuration', { missing });
    return;
  }

  try {
    const response = await fetch(`${BREVO_API_BASE_URL}/account`, {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'api-key': BREVO_API_KEY,
      },
    });

    const responseBody = await parseResponseBody(response);
    if (!response.ok) {
      throw buildBrevoError('Brevo account verification failed', {
        code: 'E_BREVO_VERIFY',
        status: response.status,
        responseBody,
      });
    }

    console.log('[BREVO] Connection verified');
  } catch (err) {
    logBrevoError('Connection verification failed', err);
  }
};

const getClientIp = (req) => {
  const forwardedFor = req.headers['x-forwarded-for'];
  if (typeof forwardedFor === 'string' && forwardedFor.trim()) {
    return forwardedFor.split(',')[0].trim();
  }
  return req.ip || req.socket?.remoteAddress || 'unknown';
};

const getRecentSuccessfulSends = (ip, now) => {
  const history = successfulSendsByIp.get(ip) || [];
  const recentHistory = history.filter((timestamp) => now - timestamp < RATE_LIMIT_WINDOW_MS);

  if (recentHistory.length > 0) {
    successfulSendsByIp.set(ip, recentHistory);
  } else {
    successfulSendsByIp.delete(ip);
  }

  return recentHistory;
};

app.get('/api/health', (_req, res) => {
  res.json({ ok: true });
});

app.post('/api/contact', async (req, res) => {
  try {
    const now = Date.now();
    const clientIp = getClientIp(req);
    const recentSuccessfulSends = getRecentSuccessfulSends(clientIp, now);

    if (recentSuccessfulSends.length >= RATE_LIMIT_MAX_REQUESTS) {
      const oldestTimestampInWindow = recentSuccessfulSends[0];
      const retryAfterSeconds = Math.ceil((RATE_LIMIT_WINDOW_MS - (now - oldestTimestampInWindow)) / 1000);
      return res
        .status(429)
        .set('Retry-After', String(retryAfterSeconds))
        .json({ ok: false, error: 'rate limit exceeded: max 2 messages per 10 minutes per IP' });
    }

    const { name, email, subject = '', message } = req.body || {};

    if (!name || !email || !message) {
      return res.status(400).json({ ok: false, error: 'name, email, message are required' });
    }

    const isEmailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    if (!isEmailValid) {
      return res.status(400).json({ ok: false, error: 'invalid email' });
    }

    await sendMailViaBrevo({ name, email, subject, message });

    successfulSendsByIp.set(clientIp, [...recentSuccessfulSends, Date.now()]);

    return res.json({ ok: true });
  } catch (err) {
    logBrevoError('Send mail failed', err);
    if (err?.code === 'E_BREVO_CONFIG') {
      return res.status(500).json({ ok: false, error: 'email service is not configured' });
    }
    return res.status(500).json({ ok: false, error: 'failed to send message' });
  }
});

app.listen(PORT, () => {
  console.log(`API listening on :${PORT}`);
  verifyBrevoConnection();
});
