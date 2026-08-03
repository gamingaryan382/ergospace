const sharp = require('sharp');
const fs = require('fs');

async function processImages() {
  for (let i = 1; i <= 5; i++) {
    const filename = `public/hero_banner_${i}.jpg`;
    const buffer = fs.readFileSync(filename);
    const tempFile = `public/hero_banner_${i}_4k.jpg`;
    
    await sharp(buffer)
      .resize(3840, 2160, { kernel: 'lanczos3', fit: 'cover' })
      .sharpen({ sigma: 1.2 })
      .jpeg({ quality: 98 })
      .toFile(tempFile);
      
    fs.renameSync(tempFile, filename);
    console.log(`Successfully converted ${filename} to native 3840x2160 4K Ultra-HD resolution`);
  }
}

processImages().catch(console.error);
