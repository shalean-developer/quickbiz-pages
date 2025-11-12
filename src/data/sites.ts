export interface Site {
  slug: string;
  title: string;
  domain: string;
  description: string;
  category: string;
  heroImage: string;
  screenshots: string[];
  contact: string;
  primaryColor: string;
  tags: string[];
  heroBlurb: string;
  launchDate?: string;
}

export const sites: Site[] = [
  {
    slug: 'shalean',
    title: 'Shalean Cleaning Services',
    domain: 'https://shalean.co.za',
    description: 'Reliable residential & commercial cleaning services — online booking and professional teams.',
    category: 'Cleaning Services',
    heroImage: '/images/sites/shalean/hero.png',
    screenshots: [
      '/images/sites/shalean/hero.png',
      '/images/sites/shalean/screenshot-2.png'
    ],
    contact: 'info@shalean.co.za',
    primaryColor: '#0EA5A4',
    tags: ['booking', 'cleaning', 'residential', 'commercial'],
    heroBlurb: 'Top-rated cleaning for homes and offices. Fast online booking, insured teams, eco-friendly products. Book a trusted cleaner in minutes.',
    launchDate: '2024'
  },
  {
    slug: 'exotictmspa',
    title: 'Exotic TM Spa',
    domain: 'http://exotictmspa.co.za',
    description: 'Luxury spa treatments, massages and pampering packages.',
    category: 'Spa',
    heroImage: '/images/sites/exotictmspa/hero.png',
    screenshots: [
      '/images/sites/exotictmspa/hero.png',
      '/images/sites/exotictmspa/screenshot-2.png'
    ],
    contact: 'bookings@exotictmspa.co.za',
    primaryColor: '#D946EF',
    tags: ['spa', 'wellness', 'massage', 'vouchers'],
    heroBlurb: 'Indulge in rejuvenating massage and spa treatments. Book signature therapies and gift vouchers online.',
    launchDate: '2024'
  },
  {
    slug: 'teamedlick',
    title: 'Team Edlick',
    domain: 'https://teamedlick.co.za',
    description: 'Digital agency — web design, branding, and marketing.',
    category: 'Agency',
    heroImage: '/images/sites/teamedlick/hero.png',
    screenshots: [
      '/images/sites/teamedlick/hero.png',
      '/images/sites/teamedlick/screenshot-2.png'
    ],
    contact: 'hello@teamedlick.co.za',
    primaryColor: '#2563EB',
    tags: ['web', 'branding', 'seo'],
    heroBlurb: 'Creative website and brand solutions for small businesses — strategy, design, and growth.',
    launchDate: '2024'
  }
];
