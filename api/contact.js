import { sendContactEmail } from './sendContactEmail.js';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).json({ message: 'Method not allowed' });
  }

  try {
    await sendContactEmail(req.body);
    return res.status(200).json({ message: 'Message sent successfully.' });
  } catch (error) {
    console.error('[api/contact] failed to send contact email', error);
    return res.status(error.statusCode || 500).json({
      message: error.statusCode === 400 || error.statusCode === 500
        ? error.message
        : 'Failed to send message. Please email me directly.',
    });
  }
}
