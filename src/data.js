import tour1 from './images/tour-1.jpeg';
import tour2 from './images/tour-2.jpeg';
import tour3 from './images/tour-3.jpeg';
import tour4 from './images/tour-4.jpeg';
import tour5 from './images/tour-5.jpeg';
import tour6 from './images/tour-6.jpeg';

export const copyright = 'Adam F Lopez — adamf04@gmail.com'; 
export const date = new Date().getFullYear();

export const pageLinks = [
  { id: 1, href: '#home', text: 'home' },
  { id: 2, href: '#about', text: 'about' },
  { id: 3, href: '#services', text: 'services' },
  { id: 4, href: '#tours', text: 'tours' },
];

export const socialLinks = [
  { id: 1, href: 'https://www.facebook.com', icon: 'fab fa-facebook' },
  { id: 2, href: 'https://www.twitter.com', icon: 'fab fa-twitter' },
  { id: 3, href: 'https://www.linkedin.com', icon: 'fab fa-linkedin' },
];

export const services = [
  { id: 1, icon: 'fas fa-wallet fa-fw', title: 'saving money', text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.Asperiores, officia.' },
  { id: 2, icon: 'fas fa-tree fa-fw', title: 'endless hiking', text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.Asperiores, officia.' },
  { id: 3, icon: 'fas fa-socks fa-fw', title: 'amazing comfort', text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.Asperiores, officia.' },
];

export const tours = [
    { 
        id: 1, 
        image: tour1,
        title: 'best of java', 
        date: 'october 1th, 2020', 
        info: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumquevitae tempore voluptatum maxime reprehenderit eum quodexercitationem fugit, qui corporis.',
        location: 'indonesia',
        duration: 11,
        cost: 1400,
    },
    { 
        id: 2, 
        image: tour2,
        title: 'Tibet Adventure', 
        date: 'august 26th, 2020', 
        info: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumquevitae tempore voluptatum maxime reprehenderit eum quodexercitationem fugit, qui corporis.',
        location: 'china',
        duration: 6,
        cost: 2100,
    },
    { 
        id: 3, 
        image: tour3,
        title: 'explore hong kong', 
        date: 'september 15th, 2020', 
        info: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumquevitae tempore voluptatum maxime reprehenderit eum quodexercitationem fugit, qui corporis.',
        location: 'hong kong',
        duration: 8,
        cost: 5000,
    },
    { 
        id: 4, 
        image: tour4,
        title: 'kenya highlights', 
        date: 'december 5th, 2019', 
        info: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumquevitae tempore voluptatum maxime reprehenderit eum quodexercitationem fugit, qui corporis.',
        location: 'kenya',
        duration: 20,
        cost: 5000,
    },
    { 
        id: 5,
        image: tour5,
        title: 'United States Adventure', 
        date: 'June 4th, 2024', 
        info: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumquevitae tempore voluptatum maxime reprehenderit eum quodexercitationem fugit, qui corporis.',
        location: 'united states',
        duration: 4,
        cost: 1700,
    },
    { 
        id: 6, 
        image: tour6,
        title: 'Featured Beaches', 
        date: 'july 26th, 2020', 
        info: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumquevitae tempore voluptatum maxime reprehenderit eum quodexercitationem fugit, qui corporis.',
        location: 'florida',
        duration: 3,
        cost: 700,
    },
]