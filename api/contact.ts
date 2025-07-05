import type { VercelRequest, VercelResponse } from '@vercel/node';
import { insertContactSchema } from '../shared/schema';
import { storage } from './_lib/storage';
import { z } from 'zod';
import nodemailer from 'nodemailer';

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'POST') {
    res.status(405).json({ error: 'Method not allowed' });
    return;
  }
  try {
    const contactData = insertContactSchema.parse(req.body);
    const contact = await storage.createContact(contactData);

    // Send email to jayan@wealthxfinancial.com
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_PASS,
      },
    });

    const mailOptions = {
      from: process.env.GMAIL_USER,
      to: 'jayan@wealthxfinancial.com',
      subject: 'New Contact Form Submission',
      text: `You have received a new contact form submission.\n\nName: ${contactData.name}\nEmail: ${contactData.email}\nPhone: ${contactData.phone || ''}\nCity: ${contactData.city || ''}\nMessage: ${contactData.message}`,
    };

    try {
      await transporter.sendMail(mailOptions);
    } catch (emailError) {
      res.status(500).json({ error: 'Contact saved, but failed to send email', details: emailError instanceof Error ? emailError.message : emailError });
      return;
    }

    res.json({ success: true, contact });
  } catch (error) {
    if (error instanceof z.ZodError) {
      res.status(400).json({ error: 'Invalid contact data', details: error.errors });
    } else {
      res.status(500).json({ error: 'Failed to save contact' });
    }
  }
} 