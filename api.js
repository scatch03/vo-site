import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import nodemailer from 'nodemailer';
import dns from 'node:dns/promises';
import net from 'node:net';

dotenv.config();
const env = globalThis.process?.env ?? {};

const app = express();
const PORT = Number(env.PORT || 4000);
const RATE_LIMIT_WINDOW_MS = 10 * 60 * 1000;
const RATE_LIMIT_MAX_REQUESTS = 2;
const SMTP_CONNECTION_TIMEOUT_MS = Number(env.SMTP_CONNECTION_TIMEOUT_MS || 15000);
const SMTP_GREETING_TIMEOUT_MS = Number(env.SMTP_GREETING_TIMEOUT_MS || 10000);
const SMTP_SOCKET_TIMEOUT_MS = Number(env.SMTP_SOCKET_TIMEOUT_MS || 20000);
const SMTP_FORCE_IPV4 = env.SMTP_FORCE_IPV4 !== 'false';
const SMTP_SERVER_HOST = env.SMTP_HOST || 'smtp.gmail.com';
const successfulSendsByIp = new Map();

app.use(cors({ origin: env.CLIENT_ORIGIN || 'http://localhost:5173' }));
app.use(express.json());

const resolveSmtpHost = async () => {
  if (!SMTP_FORCE_IPV4 || !SMTP_SERVER_HOST || net.isIP(SMTP_SERVER_HOST)) {
    return SMTP_SERVER_HOST;
  }

  try {
    const ipv4Addresses = await dns.resolve4(SMTP_SERVER_HOST);
    if (ipv4Addresses.length > 0) {
      console.log(`[SMTP] Resolved ${SMTP_SERVER_HOST} to IPv4 ${ipv4Addresses[0]}`);
      return ipv4Addresses[0];
    }
  } catch (err) {
    console.error('[SMTP] Failed to resolve IPv4 address, using hostname', {
      host: SMTP_SERVER_HOST,
      message: err?.message,
      code: err?.code,
    });
  }

  return SMTP_SERVER_HOST;
};

const smtpTransportHost = await resolveSmtpHost();

const transporter = nodemailer.createTransport({
  host: smtpTransportHost,
  port: Number(env.SMTP_PORT || 587),
  secure: env.SMTP_SECURE === 'true',
  family: 4,
  connectionTimeout: SMTP_CONNECTION_TIMEOUT_MS,
  greetingTimeout: SMTP_GREETING_TIMEOUT_MS,
  socketTimeout: SMTP_SOCKET_TIMEOUT_MS,
  tls: {
    servername: SMTP_SERVER_HOST,
  },
  auth: {
    user: env.SMTP_USER,
    pass: env.SMTP_PASS,
  },
});

const logSmtpError = (context, err) => {
  console.error(`[SMTP] ${context}`, {
    message: err?.message,
    code: err?.code,
    command: err?.command,
    responseCode: err?.responseCode,
    response: err?.response,
  });
};

const verifySmtpConnection = async () => {
  try {
    await transporter.verify();
    console.log('[SMTP] Connection verified');
  } catch (err) {
    logSmtpError('Connection verification failed', err);
  }
};

app.get('/api/health', (_req, res) => {
  res.json({ ok: true });
});

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

    await transporter.sendMail({
      from: env.SMTP_FROM || env.SMTP_USER,
      to: env.CONTACT_TO || env.SMTP_USER,
      replyTo: email,
      subject: subject ? `[Portfolio] ${subject}` : '[Portfolio] New message',
      text: `Name: ${name}\nEmail: ${email}\n\n${message}`,
    });

    successfulSendsByIp.set(clientIp, [...recentSuccessfulSends, Date.now()]);

    return res.json({ ok: true });
  } catch (err) {
    logSmtpError('Send mail failed', err);
    return res.status(500).json({ ok: false, error: 'failed to send message' });
  }
});

app.listen(PORT, () => {
  console.log(`API listening on :${PORT}`);
  verifySmtpConnection();
});
