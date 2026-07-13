import fs from 'fs';
import path from 'path';

const logos = [
  { name: 'razorpay', url: 'https://logo.clearbit.com/razorpay.com' },
  { name: 'zomato', url: 'https://logo.clearbit.com/zomato.com' },
  { name: 'groww', url: 'https://logo.clearbit.com/groww.in' },
  { name: 'cred', url: 'https://logo.clearbit.com/cred.club' },
  { name: 'swiggy', url: 'https://logo.clearbit.com/swiggy.com' },
  { name: 'paytm', url: 'https://logo.clearbit.com/paytm.com' },
  { name: 'flipkart', url: 'https://logo.clearbit.com/flipkart.com' }
];

const publicDir = 'C:\\Users\\admin\\.gemini\\antigravity\\scratch\\ergospace-premium\\public';

async function downloadLogos() {
  for (const logo of logos) {
    try {
      console.log(`Downloading official logo for ${logo.name}...`);
      const response = await fetch(logo.url);
      if (!response.ok) {
        throw new Error(`Failed to download ${logo.name}: ${response.statusText}`);
      }
      const buffer = Buffer.from(await response.arrayBuffer());
      const destPath = path.join(publicDir, `logo_${logo.name}.png`);
      fs.writeFileSync(destPath, buffer);
      console.log(`Saved ${logo.name} logo to ${destPath}`);
    } catch (err) {
      console.error(`Error downloading logo for ${logo.name}:`, err.message);
    }
  }
}

downloadLogos();
