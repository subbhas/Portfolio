import type { VercelRequest, VercelResponse } from '@vercel/node';

export default function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'GET') {
    res.status(405).json({ error: 'Method not allowed' });
    return;
  }
  const vCardData = `BEGIN:VCARD
VERSION:3.0
FN:Jayan Jayabal
TITLE:Entrepreneur & Wealth Advisor
TEL;TYPE=WORK,VOICE:+1-604-704-7972
URL:https://jayanjayabal.ca
item1.URL:https://linkedin.com/in/jayan-jayabal
item1.X-ABLabel:LinkedIn
END:VCARD`;

  res.setHeader('Content-Type', 'text/vcard');
  res.setHeader('Content-Disposition', 'attachment; filename="jayan-jayabal.vcf"');
  res.send(vCardData);
} 