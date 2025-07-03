export async function generateQRCode(data: string): Promise<string> {
  // Using qr-server.com API for QR code generation
  const size = 200;
  const format = 'png';
  const encodedData = encodeURIComponent(data);
  
  const qrUrl = `https://api.qrserver.com/v1/create-qr-code/?size=${size}x${size}&format=${format}&data=${encodedData}`;
  
  return qrUrl;
}
