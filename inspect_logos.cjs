const sharp = require('sharp');

async function findLogoBounds() {
  const input = 'C:/Users/admin/.gemini/antigravity/brain/13d93cd3-e50d-4756-b7e3-d5a22714068e/.user_uploaded/media__1785697227722.png';
  const { data, info } = await sharp(input).raw().toBuffer({ resolveWithObject: true });
  
  const width = info.width;
  const height = info.height;
  const channels = info.channels;
  
  // Find vertical distribution
  console.log('--- VERTICAL PROFILE ---');
  let rowHasPixels = [];
  for (let y = 0; y < height; y++) {
    let count = 0;
    for (let x = 0; x < width; x++) {
      const idx = (y * width + x) * channels;
      const r = data[idx];
      const g = data[idx+1];
      const b = data[idx+2];
      // non-white check
      if (r < 235 || g < 235 || b < 235) {
        count++;
      }
    }
    rowHasPixels[y] = count;
    if (count > 0) {
      console.log(`Row ${y}: ${count} dark pixels`);
    }
  }
}

findLogoBounds().catch(console.error);
