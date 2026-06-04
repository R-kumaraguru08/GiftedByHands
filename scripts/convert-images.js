import sharp from 'sharp';
import { promises as fs } from 'fs';
import path from 'path';

const images = [
  'src/assets/images/hero-image.png',
  'src/assets/images/work-1.png',
  'src/assets/images/work-2.png',
  'src/assets/images/work-3.png',
  'images/couples timeline.png',
  'images/custom art.png',
  'images/love box.png',
  'images/memory card.png',
  'images/memory scrapbook.png',
  'images/modern wedding aarathi.png',
  'images/qr memory frame .png',
  'images/spotify.png'
];

async function convert() {
  for (const relative of images) {
    const filePath = path.resolve(relative);
    const outPath = filePath.replace(/\.png$/i, '.webp');
    try {
      await sharp(filePath)
        .webp({ quality: 80 })
        .toFile(outPath);
      console.log('Converted', filePath, '->', outPath);
    } catch (error) {
      console.error('Failed to convert', filePath, error);
    }
  }
}

convert();
