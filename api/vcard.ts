import type { VercelRequest, VercelResponse } from '@vercel/node';

export default function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'GET') {
    res.status(405).json({ error: 'Method not allowed' });
    return;
  }
  const vCardData = `BEGIN:VCARD
VERSION:3.0
FN:Jayan Jayabal
ORG:WealthX Financial Solutions
TITLE:Entrepreneur
ADR:;;142 Esplanade East;North Vancouver;BC;V7L 4X9;Canada
TEL:+1 (604) 704-7972
EMAIL:jayan@wealthxfinancial.com
URL:https://www.jayanjayabal.ca
END:VCARD`;

  res.setHeader('Content-Type', 'text/vcard');
  res.setHeader('Content-Disposition', 'attachment; filename="jayan-jayabal.vcf"');
  res.send(vCardData);
} 