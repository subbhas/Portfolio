import type { VercelRequest, VercelResponse } from '@vercel/node';
import { insertContactSchema } from '../shared/schema';
import { storage } from './_lib/storage';
import { z } from 'zod';

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'POST') {
    res.status(405).json({ error: 'Method not allowed' });
    return;
  }
  try {
    const contactData = insertContactSchema.parse(req.body);
    const contact = await storage.createContact(contactData);
    res.json({ success: true, contact });
  } catch (error) {
    if (error instanceof z.ZodError) {
      res.status(400).json({ error: 'Invalid contact data', details: error.errors });
    } else {
      res.status(500).json({ error: 'Failed to save contact' });
    }
  }
} 