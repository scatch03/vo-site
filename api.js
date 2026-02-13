import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import nodemailer from 'nodemailer';

dotenv.config();
const env = globalThis.process?.env ?? {};

const app = express();
const PORT = Number(env.PORT || 4000);

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

app.post('/api/contact', async (req, res) => {
  try {
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

    return res.json({ ok: true });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ ok: false, error: 'failed to send message' });
  }
});

app.listen(PORT, () => {
  console.log(`API listening on :${PORT}`);
});
