import type { VercelRequest, VercelResponse } from '@vercel/node';

export default function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'GET') {
    res.status(405).json({ error: 'Method not allowed' });
    return;
  }
  const vCardData = `BEGIN:VCARD\nVERSION:3.0\nFN:Jayan Jayabal\nORG:WealthX Financial Solutions\nTITLE:Founder & CEO\nADR:;;142 Esplanade East;North Vancouver;BC;V7L 4X9;Canada\nTEL:+1-604-555-0123\nEMAIL:jayan@jayanjayabal.com\nURL:https://jayanjayabal.com\nNOTE:Wealth Management & Venture Capital Expert\nEND:VCARD`;

  res.setHeader('Content-Type', 'text/vcard');
  res.setHeader('Content-Disposition', 'attachment; filename="jayan-jayabal.vcf"');
  res.send(vCardData.replace(/\\n/g, '\n'));
} 