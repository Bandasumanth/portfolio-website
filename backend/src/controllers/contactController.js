import { insertContact } from '../models/Contact.js';
import { sendEmail } from '../utils/emailService.js';
import validator from 'validator';
import dotenv from 'dotenv';

dotenv.config();

export const submitContact = async (req, res) => {
  try {
    const { name, email, subject, message } = req.body;

    // Validation
    if (!name || !email || !subject || !message) {
      return res.status(400).json({ message: 'All fields are required' });
    }

    if (!validator.isEmail(email)) {
      return res.status(400).json({ message: 'Invalid email address' });
    }

    if (message.length < 10) {
      return res.status(400).json({ message: 'Message must be at least 10 characters long' });
    }

    // Save to database
    await insertContact(name, email, subject, message);

    // Send confirmation email to user
    await sendEmail(
      email,
      'We received your message',
      `
        <h2>Hello ${name},</h2>
        <p>Thank you for reaching out! We have received your message and will get back to you soon.</p>
        <p><strong>Subject:</strong> ${subject}</p>
        <p>Best regards,<br/>Sumanth Manu</p>
      `
    );

    // Send notification to portfolio owner
    await sendEmail(
      process.env.RECEIVER_EMAIL,
      `New Contact Form Submission: ${subject}`,
      `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Subject:</strong> ${subject}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `
    );

    res.status(201).json({ message: 'Message sent successfully' });
  } catch (error) {
    console.error('Error in submitContact:', error);
    res.status(500).json({ message: 'Error processing your request' });
  }
};
