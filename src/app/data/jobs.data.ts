import { Job } from '@utils/interfaces';

export const JOBS: Job[] = [
    {
        id: 'ai-engineer',
        title: 'AI Engineer',
        description: 'Build and evolve cutting-edge AI systems that transform how software organizations accelerate their productivity and innovation.',
        location: 'San Francisco, CA',
        openings: 2,
        tags: ['engineering'],
        type: 'full-time',
        responsibilities: [
            'Innovate at the forefront of AI by designing, developing, and deploying AI-driven agentic systems that enhance core AI capabilities.',
            'Work with product and engineering teams to integrate emerging AI research findings into practical, customer-centric solutions.',
            'Engage in iterative development processes, rapidly prototyping and refining AI functionalities based on real-world feedback to meet the evolving needs of developers and enterprises.',
            'Take the initiative in identifying and addressing product stability and scalability challenges, ensuring systems reliably support large-scale operational demands.',
            'Lead the exploration and integration of large-scale data processing techniques to improve the reliability and effectiveness of AI systems.'
        ],
        qualifications: [
            '2+ years of hands-on experience in AI/ML engineering roles post-acquisition of a Bachelor\'s or Master\'s degree in Computer Science, Engineering, AI, or a related technical field.',
            'Demonstrated proficiency with LLMs and a track record of applying AI/ML techniques to solve complex, unstructured problems, ideally within the domain of software engineering or related areas.',
            'Self-motivated and autonomous, with a proven ability to navigate ambiguous research projects from conception to impactful deployment.',
            'Strong communication skills that enable you to articulate technical concepts and strategies clearly at all levels, coupled with a strategic mindset oriented towards innovation.',
            'Experience with data-intensive applications and familiarity with the software development lifecycle are highly desirable, though not mandatory.'
        ]
    },
    {
        id: 'data-engineer',
        title: 'Data Engineer',
        description: 'Design and build scalable data pipelines that power our AI-driven platform and enable data-driven decision making.',
        location: 'San Francisco, CA',
        openings: 1,
        tags: ['engineering'],
        type: 'full-time',
        responsibilities: [
            'Design, build, and maintain scalable data pipelines and ETL processes.',
            'Collaborate with data scientists and ML engineers to operationalize machine learning models.',
            'Optimize data storage and retrieval systems for performance and cost efficiency.',
            'Implement data quality monitoring and validation frameworks.',
            'Build and maintain data warehousing solutions that support business analytics.'
        ],
        qualifications: [
            '3+ years of experience in data engineering or related roles.',
            'Proficiency in SQL and experience with distributed data processing frameworks (Spark, Flink).',
            'Experience with cloud data platforms (AWS, GCP, or Azure).',
            'Strong programming skills in Python or Scala.',
            'Familiarity with data modeling concepts and best practices.'
        ]
    },
    {
        id: 'frontend-engineer',
        title: 'Frontend Engineer',
        description: 'Create beautiful, performant user interfaces that delight developers and make complex AI capabilities accessible.',
        location: 'San Francisco, CA',
        openings: 2,
        tags: ['engineering'],
        type: 'full-time',
        responsibilities: [
            'Build responsive and accessible web applications using modern frontend frameworks.',
            'Collaborate with designers to implement pixel-perfect UI components.',
            'Optimize application performance and ensure smooth user experiences.',
            'Write clean, maintainable code with comprehensive test coverage.',
            'Contribute to the development of our design system and component library.'
        ],
        qualifications: [
            '3+ years of experience in frontend development.',
            'Expert knowledge of TypeScript, React or Angular.',
            'Experience with modern CSS frameworks and methodologies.',
            'Understanding of web accessibility standards (WCAG).',
            'Familiarity with frontend testing frameworks and CI/CD pipelines.'
        ]
    },
    {
        id: 'fullstack-engineer',
        title: 'Fullstack Engineer',
        description: 'Work across the entire stack to build features that span from database to user interface.',
        location: 'San Francisco, CA',
        openings: 3,
        tags: ['engineering'],
        type: 'full-time',
        responsibilities: [
            'Develop features end-to-end, from database schema to API to frontend.',
            'Participate in system design discussions and architectural decisions.',
            'Mentor junior engineers and conduct code reviews.',
            'Troubleshoot and debug issues across the full stack.',
            'Collaborate with product managers to define and refine feature requirements.'
        ],
        qualifications: [
            '4+ years of fullstack development experience.',
            'Strong proficiency in both frontend (React/Angular) and backend (Node.js/Python) technologies.',
            'Experience with relational and NoSQL databases.',
            'Understanding of RESTful API design and microservices architecture.',
            'Excellent problem-solving skills and attention to detail.'
        ]
    },
    {
        id: 'qa-engineer',
        title: 'QA Engineer',
        description: 'Ensure the quality and reliability of our platform through comprehensive testing strategies.',
        location: 'San Francisco, CA',
        openings: 1,
        tags: ['qa'],
        type: 'full-time',
        responsibilities: [
            'Develop and execute comprehensive test plans and test cases.',
            'Build and maintain automated testing frameworks.',
            'Identify, document, and track bugs through resolution.',
            'Collaborate with developers to improve code quality and testability.',
            'Perform regression testing and ensure release readiness.'
        ],
        qualifications: [
            '3+ years of experience in software quality assurance.',
            'Experience with test automation tools (Selenium, Cypress, Playwright).',
            'Strong understanding of software testing methodologies.',
            'Excellent analytical and problem-solving skills.',
            'Experience with CI/CD pipelines and DevOps practices.'
        ]
    },
    {
        id: 'product-designer',
        title: 'Product Designer',
        description: 'Shape the future of developer tools through thoughtful, user-centered design.',
        location: 'San Francisco, CA',
        openings: 1,
        tags: ['design'],
        type: 'full-time',
        responsibilities: [
            'Lead the design process from research and ideation to final implementation.',
            'Create wireframes, prototypes, and high-fidelity mockups.',
            'Conduct user research and usability testing.',
            'Collaborate closely with engineering to ensure design quality.',
            'Contribute to and evolve our design system.'
        ],
        qualifications: [
            '4+ years of product design experience, preferably in developer tools or B2B SaaS.',
            'Strong portfolio demonstrating end-to-end design process.',
            'Proficiency in Figma and prototyping tools.',
            'Experience with design systems and component libraries.',
            'Excellent communication and collaboration skills.'
        ]
    },
    {
        id: 'engineering-manager',
        title: 'Engineering Manager',
        description: 'Lead and grow a team of talented engineers building the future of software development.',
        location: 'San Francisco, CA',
        openings: 1,
        tags: ['management', 'engineering'],
        type: 'full-time',
        responsibilities: [
            'Hire, mentor, and develop a high-performing engineering team.',
            'Define technical strategy and roadmap in collaboration with product.',
            'Foster a culture of innovation, collaboration, and continuous improvement.',
            'Remove blockers and ensure team delivery on commitments.',
            'Partner with cross-functional leaders to drive company objectives.'
        ],
        qualifications: [
            '5+ years of software engineering experience with 2+ years in management.',
            'Track record of building and scaling engineering teams.',
            'Strong technical background with ability to make architectural decisions.',
            'Excellent communication and leadership skills.',
            'Experience with agile methodologies and modern development practices.'
        ]
    },
    {
        id: 'hr-coordinator',
        title: 'HR Coordinator',
        description: 'Support our growing team by managing HR operations and creating an exceptional employee experience.',
        location: 'San Francisco, CA',
        openings: 1,
        tags: ['hr'],
        type: 'part-time',
        responsibilities: [
            'Coordinate recruiting activities including scheduling and candidate communication.',
            'Manage onboarding and offboarding processes.',
            'Maintain employee records and HR documentation.',
            'Support benefits administration and employee inquiries.',
            'Assist with planning company events and culture initiatives.'
        ],
        qualifications: [
            '2+ years of experience in HR or administrative roles.',
            'Strong organizational and multitasking abilities.',
            'Excellent interpersonal and communication skills.',
            'Proficiency with HRIS systems and Google Workspace.',
            'Understanding of HR best practices and employment law basics.'
        ]
    }
];

export function getJobById(id: string): Job | undefined {
    return JOBS.find(job => job.id === id);
}

export function getJobsByTag(tag: string): Job[] {
    if (tag === 'all') return JOBS;
    return JOBS.filter(job => job.tags.includes(tag as any));
}

export function getUniqueLocations(): string[] {
    return [...new Set(JOBS.map(job => job.location))];
}
