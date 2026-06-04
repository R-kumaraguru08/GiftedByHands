import hero from '../assets/images/hero-image.png';
import heroWebp from '../assets/images/hero-image.webp';
import workA from '../assets/images/work-1.png';
import workAWebp from '../assets/images/work-1.webp';
import workB from '../assets/images/work-2.png';
import workBWebp from '../assets/images/work-2.webp';
import workC from '../assets/images/work-3.png';
import workCWebp from '../assets/images/work-3.webp';

import coupleTimelineImg from '../../images/couples timeline.png';
import coupleTimelineImgWebp from '../../images/couples timeline.webp';
import customArtImg from '../../images/custom art.png';
import customArtImgWebp from '../../images/custom art.webp';
import loveBoxImg from '../../images/love box.png';
import loveBoxImgWebp from '../../images/love box.webp';
import memoryCardImg from '../../images/memory card.png';
import memoryCardImgWebp from '../../images/memory card.webp';
import memoryScrapbookImg from '../../images/memory scrapbook.png';
import memoryScrapbookImgWebp from '../../images/memory scrapbook.webp';
import modernWeddingAarathiImg from '../../images/modern wedding aarathi.png';
import modernWeddingAarathiImgWebp from '../../images/modern wedding aarathi.webp';
import qrMemoryFrameImg from '../../images/qr memory frame .png';
import qrMemoryFrameImgWebp from '../../images/qr memory frame .webp';
import spotifyImg from '../../images/spotify.png';
import spotifyImgWebp from '../../images/spotify.webp';

const imageByName = {
  'Memory Card': { image: memoryCardImg, imageWebp: memoryCardImgWebp },
  'Love Box': { image: loveBoxImg, imageWebp: loveBoxImgWebp },
  'Modern Wedding Aarathi': { image: modernWeddingAarathiImg, imageWebp: modernWeddingAarathiImgWebp },
  'Memory Scrapbook': { image: memoryScrapbookImg, imageWebp: memoryScrapbookImgWebp },
  'Custom Artwork': { image: customArtImg, imageWebp: customArtImgWebp },
  'Couple Timeline Frame': { image: coupleTimelineImg, imageWebp: coupleTimelineImgWebp },
  'Spotify Frame': { image: spotifyImg, imageWebp: spotifyImgWebp },
  'QR Memory Frame': { image: qrMemoryFrameImg, imageWebp: qrMemoryFrameImgWebp },
};

// Template space for adding a new product later.
// Copy this object into the products array when you add a new product.
export const productDataTemplate = {
  id: 'your-product-id',
  name: 'Your Product Name',
  description: 'Write a short description here.',
  features: ['Feature 1', 'Feature 2', 'Feature 3'],
  image: hero,
  imageWebp: heroWebp,
};

// Add your product image mapping here when you have a new image file.
export const productImageTemplate = {
  'Your Product Name': { image: hero, imageWebp: heroWebp },
};

export const products = [
  {
    id: 'memory-card',
    name: 'Memory Card',
    description: 'Turn photos and memories into hand-drawn keepsakes.',
    features: ['First Meet', 'First Message', 'Proposal', 'Anniversary'],
    ...imageByName['Memory Card'],
  },
  {
    id: 'love-box',
    name: 'Love Box',
    description: 'A surprise gift box layered with personal notes, treats and tiny treasures.',
    features: ['Photos', 'Chocolates', 'Love Notes', 'Mini Gifts'],
    ...imageByName['Love Box'],
  },
  {
    id: 'memory-scrapbook',
    name: 'Memory Scrapbook',
    description: 'A custom storybook for your relationship journey and cherished milestones.',
    features: ['Photos', 'Messages', 'Dates', 'Relationship Journey'],
    ...imageByName['Memory Scrapbook'],
  },
  {
    id: 'custom-artwork',
    name: 'Custom Artwork',
    description: 'Convert photos into hand-drawn illustrations, digital art or cartoon portraits.',
    features: ['Photo to Art', 'Digital Design', 'Cartoon Portraits'],
    ...imageByName['Custom Artwork'],
  },
  {
    id: 'couple-timeline-frame',
    name: 'Couple Timeline Frame',
    description: 'Your story deserves to be remembered — from first meet to forever, all in one beautiful timeline frame.',
    features: ['First Meet', 'Proposal', 'Anniversary'],
    ...imageByName['Couple Timeline Frame'],
  },
  {
    id: 'spotify-frame',
    name: 'Spotify Frame',
    description: 'A photo keepsake paired with your favorite song and story.',
    features: ['Photo + Song', 'Personalized QR', 'Emotionally Curated'],
    ...imageByName['Spotify Frame'],
  },
  {
    id: 'qr-memory-frame',
    name: 'QR Memory Frame',
    description: 'A frame with a QR code to unlock videos, albums and voice messages.',
    features: ['Video', 'Photo Album', 'Voice Message'],
    ...imageByName['QR Memory Frame'],
  },
  {
    id: 'modern-wedding-aarathi',
    name: 'Modern Wedding Aarathi',
    description: 'Elegant and personalized aarathi plates crafted to make wedding welcomes truly unforgettable.',
    features: ['Custom Names', 'LED & Floral Designs', 'Premium Decorations'],
    ...imageByName['Modern Wedding Aarathi'],
  },
];

export const gallery = [
  { id: 'gallery-1', image: workA, imageWebp: workAWebp },
  { id: 'gallery-2', image: workB, imageWebp: workBWebp },
  { id: 'gallery-3', image: workC, imageWebp: workCWebp },
  { id: 'gallery-4', image: hero, imageWebp: heroWebp }
];
