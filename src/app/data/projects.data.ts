export interface Project {
  id: string;
  title: string;
  date: string;
  shortDescription: string;
  description: string;
  url: string;
  bannerImage: string;
  images: string[];
  technologies: string[];
}

export const PROJECTS: Project[] = [
  {
    id: 'fahwa',
    title: 'Fahwa',
    date: '2025-01-15',
    shortDescription: 'AI-powered personal branding platform for strategic content creation and social media management.',
    description: 'Fahwa is the number one personal branding platform that helps professionals, freelancers, influencers, and job seekers build their online presence through strategic AI content solutions. The platform offers a comprehensive suite of tools including personalized brand strategy development, AI-powered content calendars for automated post scheduling, pre-made professional templates, FahwaGPT assistant for instant content ideas and writing tips, and seamless social media integration for direct publishing. Fahwa eliminates content creation worries while maintaining consistency and quality across all branding efforts.',
    url: 'https://dev.fahwa.io/en',
    bannerImage: '/assets/banners/fahwa.png',
    images: [
      '/assets/projects/fahwa-1.jpg',
      '/assets/projects/fahwa-2.jpg',
      '/assets/projects/fahwa-3.jpg'
    ],
    technologies: ['Angular', 'TypeScript', 'Node.js', 'OpenAI', 'PostgreSQL', 'Tailwind CSS']
  },
  {
    id: 'drivepk',
    title: 'DrivePK',
    date: '2024-11-20',
    shortDescription: 'Pakistan\'s leading online marketplace for buying and selling used vehicles.',
    description: 'DrivePK is a comprehensive automotive marketplace designed for the Pakistani market, enabling users to buy and sell used cars, bikes, vans, trucks, and motorhomes. The platform features advanced search capabilities including filtering by make (Toyota, Suzuki, Honda, etc.), city (Karachi, Lahore, Islamabad, and more), budget ranges, and vehicle categories. A standout feature is the professional car inspection service with certified inspectors performing 200+ point checks, providing buyers with detailed reports and recommendations. The platform connects thousands of buyers and sellers across Pakistan with a user-friendly interface.',
    url: 'https://drivepk.com',
    bannerImage: '/assets/banners/drivepk.png',
    images: [
      '/assets/projects/drivepk-1.jpg',
      '/assets/projects/drivepk-2.jpg'
    ],
    technologies: ['Next.js', 'React', 'Node.js', 'MongoDB', 'AWS', 'Tailwind CSS']
  },
  {
    id: 'meal-monkey',
    title: 'Meal Monkey',
    date: '2024-08-10',
    shortDescription: 'Food delivery platform connecting hungry customers with local restaurants in India.',
    description: 'Meal Monkey is a food delivery application serving the Indian market, designed to connect customers with their favorite local restaurants for quick and convenient meal ordering. The platform provides a seamless ordering experience with real-time order tracking, multiple payment options, and a curated selection of restaurants. Built with a focus on user experience, Meal Monkey features an intuitive interface for browsing menus, customizing orders, and managing deliveries, making it easy for users to satisfy their cravings with just a few taps.',
    url: 'https://mealmonkey.in',
    bannerImage: '/assets/banners/mealmonkey.png',
    images: [
      '/assets/projects/mealmonkey-1.jpg',
      '/assets/projects/mealmonkey-2.jpg',
      '/assets/projects/mealmonkey-3.jpg'
    ],
    technologies: ['Flutter', 'Dart', 'Firebase', 'Node.js', 'Google Maps API', 'Stripe']
  },
  {
    id: 'keenly-digital',
    title: 'Keenly Digital',
    date: '2024-05-25',
    shortDescription: 'Full-service digital marketing agency specializing in SEO, web development, and advertising.',
    description: 'Keenly Digital is a comprehensive digital marketing agency website showcasing their expertise in marketing strategy, search engine optimization, web development, and digital advertising. The platform serves as both a portfolio and lead generation tool, presenting the agency\'s services, case studies, and client testimonials. Built with modern web technologies, the site demonstrates the agency\'s commitment to cutting-edge design and development practices while providing potential clients with easy access to information about their full range of digital services.',
    url: 'https://keenlydigital.com',
    bannerImage: '/assets/banners/keenlydigital.png',
    images: [
      '/assets/projects/keenlydigital-1.jpg',
      '/assets/projects/keenlydigital-2.jpg'
    ],
    technologies: ['React', 'Next.js', 'TypeScript', 'Framer Motion', 'Tailwind CSS', 'Vercel']
  },
  {
    id: '3cx',
    title: '3CX',
    date: '2024-02-18',
    shortDescription: 'Enterprise AI phone system trusted by 350,000+ businesses worldwide.',
    description: '3CX is a leading enterprise business IP phone system that provides scalable communications solutions for companies of all sizes. The platform offers a powerful all-in-one business phone system and contact center solution with features including AI-powered call analytics, transcription, and sentiment analysis. Key capabilities include flexible deployment options (on-premise, private cloud, or hosted), CRM integrations with Salesforce, HubSpot, and Zoho, world-class mobile apps for Android and iOS, video conferencing, live chat, and WhatsApp integration. With no per-user pricing and a single annual license cost, 3CX reduces enterprise phone system licensing costs by up to 80%. The platform is supported by a global network of 10,000 partners across 190 countries.',
    url: 'https://3cx.com',
    bannerImage: '/assets/banners/3cx.png',
    images: [
      '/assets/projects/3cx-1.jpg',
      '/assets/projects/3cx-2.jpg',
      '/assets/projects/3cx-3.jpg',
      '/assets/projects/3cx-4.jpg'
    ],
    technologies: ['Angular', 'TypeScript', '.NET', 'WebRTC', 'PostgreSQL', 'Docker', 'Kubernetes']
  },
  {
    id: 'kruzee',
    title: 'Kruzee',
    date: '2023-10-05',
    shortDescription: 'North America\'s most trusted driving school platform with 15,000+ satisfied drivers.',
    description: 'Kruzee is the easiest way to get your driver\'s license, operating across Canada (Ontario, British Columbia, Alberta) and New York. The platform connects learners with top-rated, vetted instructors who bring skill and passion to every lesson. Features include fully online lesson scheduling, digital progress tracking, free home pickup and drop-off, and a supportive learning experience. Kruzee offers hourly driving lessons, Beginner Driver Education (BDE) courses, and comprehensive packages that include road test preparation. Graduates are eligible for up to 20% reduction on auto insurance. As an official driving school partner of MADD Canada and MADD New York, Kruzee is committed to improving road safety through defensive driving techniques training.',
    url: 'https://kruzee.com',
    bannerImage: '/assets/banners/kruzee.png',
    images: [
      '/assets/projects/kruzee-1.jpg',
      '/assets/projects/kruzee-2.jpg',
      '/assets/projects/kruzee-3.jpg'
    ],
    technologies: ['React', 'Node.js', 'TypeScript', 'PostgreSQL', 'Stripe', 'Google Maps API', 'AWS']
  }
];
