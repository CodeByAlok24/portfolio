import nodemailer from 'nodemailer';

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const escapeHtml = (value = '') =>
  String(value)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');

const subjectLabels = {
  collaboration: 'Project Collaboration',
  freelance: 'Freelance Work',
  job: 'Job Opportunity',
  mentorship: 'Mentorship',
  other: 'Other',
};

export const validateContactPayload = ({ name = '', email = '', subject = '', message = '' } = {}) => {
  const trimmedName = String(name).trim();
  const trimmedEmail = String(email).trim();
  const trimmedSubject = String(subject).trim();
  const trimmedMessage = String(message).trim();

  if (!trimmedName || !emailPattern.test(trimmedEmail) || !trimmedSubject || !trimmedMessage) {
    return {
      ok: false,
      message: 'Please provide a valid name, email, subject, and message.',
    };
  }

  return {
    ok: true,
    data: {
      name: trimmedName,
      email: trimmedEmail,
      subject: trimmedSubject,
      message: trimmedMessage,
    },
  };
};

const createNotificationHtml = (name, email, subjectLabel, message) => `
  <!DOCTYPE html>
  <html>
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
  </head>
  <body style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; padding: 20px;">
    <div style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); padding: 30px; border-radius: 12px 12px 0 0; text-align: center;">
      <h1 style="color: white; margin: 0; font-size: 24px;">New Contact Request!</h1>
    </div>
    <div style="background: #f8f9fa; padding: 30px; border-radius: 0 0 12px 12px; border: 1px solid #e9ecef;">
      <p style="font-size: 16px; margin-bottom: 15px;">Hi <strong>Alok</strong>,</p>
      <p style="font-size: 15px; margin-bottom: 15px;">
        Someone just reached out through your portfolio regarding <strong>${escapeHtml(subjectLabel)}</strong>.
      </p>
      <div style="background: white; border-radius: 8px; padding: 20px; margin: 20px 0; border: 1px solid #e9ecef;">
        <p style="margin: 0 0 8px 0;"><strong style="color: #667eea;">Name:</strong> ${escapeHtml(name)}</p>
        <p style="margin: 0 0 8px 0;"><strong style="color: #667eea;">Email:</strong> ${escapeHtml(email)}</p>
        <p style="margin: 0 0 8px 0;"><strong style="color: #667eea;">Subject:</strong> ${escapeHtml(subjectLabel)}</p>
        <hr style="border: none; border-top: 1px solid #e9ecef; margin: 15px 0;">
        <p style="margin: 0;"><strong style="color: #667eea;">Message:</strong></p>
        <p style="margin: 10px 0 0 0; white-space: pre-wrap;">${escapeHtml(message).replace(/\n/g, '<br>')}</p>
      </div>
      <div style="text-align: center; margin: 25px 0;">
        <a href="mailto:${escapeHtml(email)}?subject=Re: ${escapeHtml(subjectLabel)}" style="display: inline-block; background: #667eea; color: white; padding: 12px 24px; text-decoration: none; border-radius: 6px; font-weight: 500; margin: 5px;">Reply to ${escapeHtml(name)}</a>
      </div>
      <hr style="border: none; border-top: 1px solid #e9ecef; margin: 20px 0;">
      <p style="font-size: 13px; color: #6c757d; margin: 0;">
        Sent from your Portfolio Contact Form
      </p>
    </div>
  </body>
  </html>
`;

const createAutoReplyHtml = (name, subjectLabel) => `
  <!DOCTYPE html>
  <html>
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
  </head>
  <body style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; padding: 20px;">
    <div style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); padding: 30px; border-radius: 12px 12px 0 0; text-align: center;">
      <h1 style="color: white; margin: 0; font-size: 24px;">Thank You for Reaching Out!</h1>
    </div>
    <div style="background: #f8f9fa; padding: 30px; border-radius: 0 0 12px 12px; border: 1px solid #e9ecef;">
      <p style="font-size: 16px; margin-bottom: 15px;">Hi <strong>${escapeHtml(name)}</strong>,</p>
      <p style="font-size: 15px; margin-bottom: 15px;">
        Thank you for contacting me regarding <strong>${escapeHtml(subjectLabel)}</strong>. 
        I've received your message and will get back to you within 24-48 hours.
      </p>
      <p style="font-size: 15px; margin-bottom: 15px;">
        In the meantime, feel free to check out my portfolio or connect with me on LinkedIn.
      </p>
      <div style="text-align: center; margin: 25px 0;">
        <a href="https://www.linkedin.com/in/alok-kumar-das-590885294" style="display: inline-block; background: #667eea; color: white; padding: 12px 24px; text-decoration: none; border-radius: 6px; font-weight: 500; margin: 5px;">Connect on LinkedIn</a>
        <a href="https://wa.me/919835137229" style="display: inline-block; background: #25D366; color: white; padding: 12px 24px; text-decoration: none; border-radius: 6px; font-weight: 500; margin: 5px;">Message on WhatsApp</a>
      </div>
      <hr style="border: none; border-top: 1px solid #e9ecef; margin: 20px 0;">
      <p style="font-size: 13px; color: #6c757d; margin: 0;">
        This is an automated response. Please don't reply to this email.
      </p>
    </div>
  </body>
  </html>
`;

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

  const { name, email, subject, message } = validation.data;
  const recipient = process.env.CONTACT_EMAIL || process.env.SMTP_USER;
  const subjectLabel = subjectLabels[subject] || subject;

  const transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });

  // Send notification to portfolio owner
  await transporter.sendMail({
    from: `"Portfolio Contact" <${process.env.SMTP_USER}>`,
    to: recipient,
    replyTo: email,
    subject: `[${subjectLabel}] Portfolio contact from ${name}`,
    text: [
      `Name: ${name}`,
      `Email: ${email}`,
      `Subject: ${subjectLabel}`,
      '',
      'Message:',
      message,
    ].join('\n'),
    html: createNotificationHtml(name, email, subjectLabel, message),
  });

  // Send auto-reply to the sender
  await transporter.sendMail({
    from: `"Alok Kumar Das" <${process.env.SMTP_USER}>`,
    to: email,
    subject: `Re: Your portfolio contact - ${subjectLabel}`,
    html: createAutoReplyHtml(name, subjectLabel),
  });
};
