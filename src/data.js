import cigarImg1 from './images/backroads_premium-classic-cigar.png';
import cigarImg2 from './images/backroads_premium-dark-maduro-cigar.png';
import cigarImg3 from './images/backroads_premium-torpedo-cigar.png';

export const copyright = 'Adam F Lopez — adamf04@gmail.com'; 
export const date = new Date().getFullYear();

export const pageLinks = [
  { id: 1, href: '#home', text: 'home' },
  { id: 2, href: '#about', text: 'about' },
  { id: 3, href: '#services', text: 'services' },
  { id: 4, href: '#products', text: 'products' },
];

export const socialLinks = [
  { id: 1, href: 'https://www.facebook.com', icon: 'fab fa-facebook' },
  { id: 2, href: 'https://www.twitter.com', icon: 'fab fa-twitter' },
  { id: 3, href: 'https://www.linkedin.com', icon: 'fab fa-linkedin' },
];

export const services = [
  { id: 1, icon: 'fas fa-wallet fa-fw', title: 'Seamless Online Ordering', text: 'Shop your favorite cigars anytime with our secure, user-friendly online store—fast checkout and nationwide shipping available.' },
  { id: 2, icon: 'fas fa-box fa-fw', title: 'Cigar Gift Bundles', text: 'Give the gift of luxury with our thoughtfully curated cigar bundles—ideal for birthdays, holidays, or client appreciation.' },
  { id: 3, icon: 'fas fa-car fa-fw', title: 'Subscription Cigar Boxes', text: 'Get top-shelf cigars delivered monthly with our customizable subscription boxes—new blends, exclusive picks, and unbeatable value straight to your door.' },
];

export const heroTitle = 'Finest Galaxy Cigars';
export const heroSubtitle = 'Handcrafted, premium cigars sourced from the finest tobacco regions. Elevate your smoking experience today.';
export const heroBtnText = 'explore products';

export const productData = [
    { 
        id: 1, 
        image: cigarImg1,
        title: 'dark maduro cigar', 
        date: 'october 1th, 2020', 
        info: 'A high-quality, realistic image of a dark maduro cigar. The cigar has a deep, rich brown wrapper with a slightly oily texture and visible veins.',
        location: 'camacho',
        stock: 11,
        cost: 1200,
    },
    { 
        id: 2, 
        image: cigarImg2,
        title: 'premium torpedo cigar', 
        date: 'august 26th, 2020', 
        info: 'A high-quality, realistic image of a premium torpedo cigar. The cigar has a medium-brown, slightly oily wrapper with fine veins.',
        location: 'enclave',
        stock: 6,
        cost: 1100,
    },
    { 
        id: 3, 
        image: cigarImg3,
        title: 'premium classico cigar', 
        date: 'september 15th, 2020', 
        info: 'A high-quality, realistic image of a premium cigar. The cigar has a rich brown wrapper with a slightly oily sheen, detailed texture, and visible veins.',
        location: 'cuba',
        stock: 8,
        cost: 2000,
    },
];