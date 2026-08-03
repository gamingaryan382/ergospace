const sharp = require('sharp');

async function extractLogos() {
  const input = 'C:/Users/admin/.gemini/antigravity/brain/13d93cd3-e50d-4756-b7e3-d5a22714068e/.user_uploaded/media__1785697227722.png';
  
  // Dell Technologies (Top Left: x 0, y 0, w 140, h 90)
  await sharp(input)
    .extract({ left: 0, top: 0, width: 140, height: 90 })
    .toFile('public/logo_dell.png');

  // AIHP (Top Right: x 140, y 0, w 140, h 90)
  await sharp(input)
    .extract({ left: 140, top: 0, width: 140, height: 90 })
    .toFile('public/logo_aihp.png');

  // Daikin (Center Row: x 0, y 90, w 280, h 90)
  await sharp(input)
    .extract({ left: 0, top: 90, width: 280, height: 90 })
    .toFile('public/logo_daikin.png');

  // Apollo Hospitals (Bottom Left: x 0, y 180, w 140, h 95)
  await sharp(input)
    .extract({ left: 0, top: 180, width: 140, height: 95 })
    .toFile('public/logo_apollo.png');

  // Airtel (Bottom Right: x 140, y 180, w 140, h 95)
  await sharp(input)
    .extract({ left: 140, top: 180, width: 140, height: 95 })
    .toFile('public/logo_airtel.png');

  console.log('Successfully extracted Dell, AIHP, Daikin, Apollo, and Airtel logos!');
}

extractLogos().catch(console.error);
