export function downloadVCard() {
  const vCardData = `BEGIN:VCARD
VERSION:3.0
FN:Jayan Jayabal
ORG:WealthX Financial Solutions
TITLE:Entrepreneur & Wealth Advisor
ADR:;;142 Esplanade East;North Vancouver;BC;V7L 4X9;Canada
TEL:+1 (604) 704-7972
EMAIL:jayan@wealthxfinancial.com
URL:https://jayanjayabal.ca
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
