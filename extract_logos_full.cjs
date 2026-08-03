const sharp = require('sharp');

async function extractFullLogos() {
  const input = 'C:/Users/admin/.gemini/antigravity/brain/13d93cd3-e50d-4756-b7e3-d5a22714068e/.user_uploaded/media__1785697227722.png';
  
  // Dell Technologies (Top Left)
  await sharp(input)
    .extract({ left: 5, top: 5, width: 130, height: 80 })
    .toBuffer()
    .then(buf => sharp({
      create: { width: 300, height: 160, channels: 4, background: { r: 255, g: 255, b: 255, alpha: 1 } }
    }).composite([{ input: buf, gravity: 'center' }]).png().toFile('public/logo_dell.png'));

  // AIHP (Top Right)
  await sharp(input)
    .extract({ left: 140, top: 5, width: 135, height: 80 })
    .toBuffer()
    .then(buf => sharp({
      create: { width: 300, height: 160, channels: 4, background: { r: 255, g: 255, b: 255, alpha: 1 } }
    }).composite([{ input: buf, gravity: 'center' }]).png().toFile('public/logo_aihp.png'));

  // Daikin (Center)
  await sharp(input)
    .extract({ left: 5, top: 90, width: 270, height: 80 })
    .toBuffer()
    .then(buf => sharp({
      create: { width: 400, height: 160, channels: 4, background: { r: 255, g: 255, b: 255, alpha: 1 } }
    }).composite([{ input: buf, gravity: 'center' }]).png().toFile('public/logo_daikin.png'));

  // Apollo Hospitals (Bottom Left)
  await sharp(input)
    .extract({ left: 5, top: 175, width: 135, height: 95 })
    .toBuffer()
    .then(buf => sharp({
      create: { width: 300, height: 160, channels: 4, background: { r: 255, g: 255, b: 255, alpha: 1 } }
    }).composite([{ input: buf, gravity: 'center' }]).png().toFile('public/logo_apollo.png'));

  // Airtel (Bottom Right)
  await sharp(input)
    .extract({ left: 140, top: 175, width: 135, height: 95 })
    .toBuffer()
    .then(buf => sharp({
      create: { width: 300, height: 160, channels: 4, background: { r: 255, g: 255, b: 255, alpha: 1 } }
    }).composite([{ input: buf, gravity: 'center' }]).png().toFile('public/logo_airtel.png'));

  console.log('Successfully re-extracted all 5 logos with full margins & centered alignment!');
}

extractFullLogos().catch(console.error);
