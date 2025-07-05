export function downloadVCard() {
  const vCardData = `BEGIN:VCARD
VERSION:3.0
FN:Jayan Jayabal
TITLE:Entrepreneur & Wealth Advisor
TEL;TYPE=WORK,VOICE:+1-604-704-7972
URL:https://jayanjayabal.ca
item1.URL:https://www.linkedin.com/in/jayan-jayabal-20495b155/
item1.X-ABLabel:LinkedIn
END:VCARD`;
  
  const blob = new Blob([vCardData], { type: 'text/vcard' });
  const url = window.URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = 'jayan-jayabal.vcf';
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  window.URL.revokeObjectURL(url);
}
