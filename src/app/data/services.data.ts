export interface Service {
  id: string;
  title: string;
  shortDescription: string;
  description: string;
  icon: string;
  features: string[];
  technologies: string[];
}

export const SERVICES: Service[] = [
  {
    id: 'web-development',
    title: 'Web Development',
    shortDescription: 'Custom web applications built with modern frameworks and scalable architecture.',
    description: 'We build high-performance, scalable web applications tailored to your business needs. From single-page applications to complex enterprise platforms, our team delivers robust solutions using cutting-edge technologies and best practices in software architecture.',
    icon: 'globe',
    features: [
      'Custom web application development',
      'Progressive Web Apps (PWA)',
      'E-commerce platforms',
      'Content management systems',
      'Real-time applications',
      'Performance optimization'
    ],
    technologies: ['Angular', 'React', 'Next.js', 'Node.js', 'TypeScript', 'PostgreSQL']
  },
  {
    id: 'mobile-development',
    title: 'Mobile Development',
    shortDescription: 'Native and cross-platform mobile apps for iOS and Android.',
    description: 'Transform your ideas into powerful mobile experiences. We develop native and cross-platform mobile applications that deliver exceptional user experiences, seamless performance, and robust functionality across all devices.',
    icon: 'device-mobile',
    features: [
      'iOS app development',
      'Android app development',
      'Cross-platform solutions',
      'App store optimization',
      'Push notifications & analytics',
      'Offline-first architecture'
    ],
    technologies: ['Flutter', 'React Native', 'Swift', 'Kotlin', 'Firebase', 'SQLite']
  },
  {
    id: 'ui-ux-design',
    title: 'UI/UX Design',
    shortDescription: 'User-centered design that creates intuitive and engaging digital experiences.',
    description: 'Our design team crafts beautiful, intuitive interfaces that delight users and drive engagement. We combine aesthetics with functionality, conducting user research and testing to ensure every interaction is meaningful and every journey is seamless.',
    icon: 'palette',
    features: [
      'User research & personas',
      'Wireframing & prototyping',
      'Visual design systems',
      'Interaction design',
      'Usability testing',
      'Design handoff & documentation'
    ],
    technologies: ['Figma', 'Adobe XD', 'Sketch', 'Principle', 'InVision', 'Zeplin']
  },
  {
    id: 'cloud-solutions',
    title: 'Cloud Solutions',
    shortDescription: 'Scalable cloud infrastructure and migration services for modern businesses.',
    description: 'Leverage the power of cloud computing to scale your business. We design, implement, and manage cloud infrastructure that provides reliability, security, and cost-efficiency. From migration to optimization, we handle your cloud journey end-to-end.',
    icon: 'cloud',
    features: [
      'Cloud architecture design',
      'Migration & modernization',
      'Multi-cloud strategies',
      'Serverless applications',
      'Cost optimization',
      'Security & compliance'
    ],
    technologies: ['AWS', 'Google Cloud', 'Azure', 'Terraform', 'Docker', 'Kubernetes']
  },
  {
    id: 'devops',
    title: 'DevOps & CI/CD',
    shortDescription: 'Streamlined development workflows with automated pipelines and infrastructure.',
    description: 'Accelerate your development lifecycle with modern DevOps practices. We implement continuous integration and deployment pipelines, infrastructure as code, and monitoring solutions that enable rapid, reliable software delivery.',
    icon: 'octAgent',
    features: [
      'CI/CD pipeline setup',
      'Infrastructure as Code',
      'Container orchestration',
      'Monitoring & alerting',
      'Automated testing',
      'Release management'
    ],
    technologies: ['GitHub Actions', 'Jenkins', 'Docker', 'Kubernetes', 'Prometheus', 'Grafana']
  },
  {
    id: 'api-development',
    title: 'API Development',
    shortDescription: 'Robust APIs and microservices that power your digital ecosystem.',
    description: 'Build the backbone of your digital products with well-designed APIs. We create RESTful and GraphQL APIs that are secure, documented, and built for scale. Our microservices architecture ensures flexibility and maintainability.',
    icon: 'code',
    features: [
      'RESTful API design',
      'GraphQL implementation',
      'Microservices architecture',
      'API documentation',
      'Authentication & security',
      'Rate limiting & caching'
    ],
    technologies: ['Node.js', 'Python', 'Go', 'GraphQL', 'REST', 'gRPC']
  },
  {
    id: 'ai-ml-solutions',
    title: 'AI & ML Solutions',
    shortDescription: 'Intelligent systems powered by machine learning and artificial intelligence.',
    description: 'Unlock the potential of artificial intelligence for your business. From predictive analytics to natural language processing, we build intelligent systems that automate processes, extract insights, and create competitive advantages.',
    icon: 'cpu',
    features: [
      'Machine learning models',
      'Natural language processing',
      'Computer vision',
      'Predictive analytics',
      'AI chatbots & assistants',
      'Model deployment & MLOps'
    ],
    technologies: ['Python', 'TensorFlow', 'PyTorch', 'OpenAI', 'Langchain', 'Hugging Face']
  },
  {
    id: 'consulting',
    title: 'Technical Consulting',
    shortDescription: 'Strategic guidance to help you make informed technology decisions.',
    description: 'Navigate the complex technology landscape with expert guidance. Our consultants help you define technical strategies, evaluate solutions, and make informed decisions that align with your business goals and budget.',
    icon: 'lightbulb',
    features: [
      'Technology assessment',
      'Architecture review',
      'Digital transformation',
      'Team augmentation',
      'Code audits',
      'Performance optimization'
    ],
    technologies: ['Agile', 'Scrum', 'TOGAF', 'System Design', 'Security Audits', 'Best Practices']
  }
];
