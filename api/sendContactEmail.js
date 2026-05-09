import nodemailer from 'nodemailer';

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const escapeHtml = (value = '') =>
  String(value)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');

export const validateContactPayload = ({ name = '', email = '', message = '' } = {}) => {
  const trimmedName = String(name).trim();
  const trimmedEmail = String(email).trim();
  const trimmedMessage = String(message).trim();

  if (!trimmedName || !emailPattern.test(trimmedEmail) || !trimmedMessage) {
    return {
      ok: false,
      message: 'Please provide a valid name, email, and message.',
    };
  }

  return {
    ok: true,
    data: {
      name: trimmedName,
      email: trimmedEmail,
      message: trimmedMessage,
    },
  };
};

export const sendContactEmail = async (payload) => {
  const validation = validateContactPayload(payload);

  if (!validation.ok) {
    const error = new Error(validation.message);
    error.statusCode = 400;
    throw error;
  }

  if (!process.env.SMTP_USER || !process.env.SMTP_PASS) {
    const error = new Error('Email service is not configured yet.');
    error.statusCode = 500;
    throw error;
  }

  const { name, email, message } = validation.data;
  const recipient = process.env.CONTACT_EMAIL || process.env.SMTP_USER;

  const transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });

  await transporter.sendMail({
    from: `"Portfolio Contact" <${process.env.SMTP_USER}>`,
    to: recipient,
    replyTo: email,
    subject: `Portfolio collaboration request from ${name}`,
    text: [
      `Name: ${name}`,
      `Email: ${email}`,
      '',
      'Message:',
      message,
    ].join('\n'),
    html: `
      <h2>New portfolio contact request</h2>
      <p><strong>Name:</strong> ${escapeHtml(name)}</p>
      <p><strong>Email:</strong> ${escapeHtml(email)}</p>
      <p><strong>Message:</strong></p>
      <p>${escapeHtml(message).replace(/\n/g, '<br>')}</p>
    `,
  });
};
