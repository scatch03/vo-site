import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import nodemailer from 'nodemailer';

dotenv.config();
const env = globalThis.process?.env ?? {};

const app = express();
const PORT = Number(env.PORT || 4000);
const RATE_LIMIT_WINDOW_MS = 10 * 60 * 1000;
const RATE_LIMIT_MAX_REQUESTS = 2;
const successfulSendsByIp = new Map();

app.use(cors({ origin: env.CLIENT_ORIGIN || 'http://localhost:5173' }));
app.use(express.json());

const transporter = nodemailer.createTransport({
  host: env.SMTP_HOST,
  port: Number(env.SMTP_PORT || 587),
  secure: env.SMTP_SECURE === 'true',
  auth: {
    user: env.SMTP_USER,
    pass: env.SMTP_PASS,
  },
});

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
    console.error(err);
    return res.status(500).json({ ok: false, error: 'failed to send message' });
  }
});

app.listen(PORT, () => {
  console.log(`API listening on :${PORT}`);
});
