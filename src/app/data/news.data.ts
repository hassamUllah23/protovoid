import { NewsItem } from '@utils/interfaces';

export const NEWS: NewsItem[] = [
    {
        id: 'ey-redefining-enterprise-development',
        tag: 'COMPANY',
        isNew: true,
        heading: 'Engineering for an Agent-First Era: How EY is Redefining Enterprise Development with Factory',
        description: 'EY is rolling out agent-native development across its global engineering organization with Factory, deploying Droids to more than 5,000 engineers in...',
        date: 'March 4, 2025',
        readTime: '2 minute read',
        content: [
            {
                title: 'Scaling execution inside existing engineering workflows',
                paragraphs: [
                    'EY is rolling out agent-native development across its global engineering organization. Over the past six months, EY has deployed Factory\'s software development agents to more than 5,000 engineers, making this one of the largest enterprise deployments of software development agents in production today.',
                    'This rollout reflects a shift in how engineering work is carried out inside enterprises. Rather than using AI as a lightweight assistive layer, EY has embedded Droids across its software development lifecycle, allowing parts of engineering workflows to be delegated while still meeting enterprise requirements for quality and security.',
                    'For agents to operate in production and daily workflows, they must operate inside the systems engineers already rely on. At EY, Droids run directly within existing development environments, including GitHub, Jira, Slack, and internal DevOps tooling. This allowed Factory to quickly take on execution-heavy work such as refactoring, code changes, and documentation updates across large repositories.'
                ]
            },
            {
                title: 'Teaching agents enterprise memory',
                paragraphs: [
                    'Enterprise codebases carry years of context that agents need to understand. Factory\'s approach involves building institutional memory into agents, allowing them to learn from existing patterns, conventions, and architectural decisions.',
                    'This contextual understanding enables agents to generate code that feels native to each codebase, rather than generic solutions that require extensive modification.'
                ]
            },
            {
                title: 'Operationalizing agent-native development at global scale',
                paragraphs: [
                    'Deploying agents across a global engineering organization requires careful orchestration. EY\'s rollout involved phased deployment, starting with pilot teams and expanding based on measured outcomes.',
                    'The key metrics tracked include developer productivity, code quality, and time-to-deployment. Early results show significant improvements across all dimensions.'
                ]
            },
            {
                title: 'Establishing a new enterprise standard',
                paragraphs: [
                    'EY\'s deployment establishes a new benchmark for enterprise adoption of AI development agents. The scale and depth of integration demonstrates that agent-native development is ready for enterprise production workloads.',
                    'As more organizations follow this path, the software industry is moving toward a future where human engineers and AI agents collaborate seamlessly on complex engineering challenges.'
                ]
            }
        ]
    },
    {
        id: 'ey-deploys-agent-native-development',
        tag: 'CASE STUDY',
        isNew: true,
        heading: 'EY deploys agent-native development to 5,000+ engineers globally with Factory',
        description: 'At enterprise scale, engineering work takes place in long-lived, interconnected codebases shaped by years of development. EY needed a...',
        date: 'February 28, 2025',
        readTime: '5 minute read',
        content: [
            {
                title: 'The enterprise challenge',
                paragraphs: [
                    'At enterprise scale, engineering work takes place in long-lived, interconnected codebases shaped by years of development. EY needed a solution that could understand this complexity while integrating seamlessly with existing workflows.',
                    'Traditional AI coding assistants fell short because they lacked the contextual understanding required for enterprise codebases. Factory\'s approach was different.'
                ]
            },
            {
                title: 'Implementation approach',
                paragraphs: [
                    'Factory worked closely with EY\'s engineering leadership to design a rollout strategy that minimized disruption while maximizing adoption.',
                    'The integration touched every part of the development lifecycle, from initial planning in Jira to code review in GitHub to deployment through CI/CD pipelines.'
                ]
            },
            {
                title: 'Results and impact',
                paragraphs: [
                    'Within six months, over 5,000 engineers were actively using Factory\'s Droids in their daily workflows. The impact was measurable across key engineering metrics.',
                    'Teams reported faster time-to-completion for routine tasks, improved code consistency, and more time available for complex problem-solving.'
                ]
            }
        ]
    },
    {
        id: 'factory-expands-to-london',
        tag: 'COMPANY',
        isNew: true,
        heading: 'Factory Expands to London',
        description: 'Factory is opening an office in London as part of our global go-to-market expansion.',
        date: 'February 15, 2025',
        readTime: '3 minute read',
        content: [
            {
                title: 'Global expansion',
                paragraphs: [
                    'Factory is excited to announce the opening of our London office, marking a significant milestone in our global expansion strategy.',
                    'This new presence in Europe will allow us to better serve our growing customer base across EMEA and strengthen our partnerships with enterprise clients.'
                ]
            },
            {
                title: 'Why London',
                paragraphs: [
                    'London represents one of the world\'s most vibrant technology ecosystems, with a deep talent pool and strong enterprise presence.',
                    'The city\'s position as a global financial center also aligns well with our focus on serving enterprise customers with complex engineering needs.'
                ]
            },
            {
                title: 'Join our team',
                paragraphs: [
                    'We\'re actively hiring across all functions in London. If you\'re passionate about building the future of software development, we\'d love to hear from you.',
                    'Check out our careers page for open positions in engineering, sales, and customer success.'
                ]
            }
        ]
    },
    {
        id: 'two-weeks-one-session-endless-packages',
        tag: 'CASE STUDY',
        isNew: false,
        heading: 'Two Weeks, One Session, Endless Packages',
        description: 'Josh Wolf, Staff Engineer at Chainguard, tried every memory solution that the AI tooling ecosystem could offer including memory MCPs, memory tools...',
        date: 'February 1, 2025',
        readTime: '4 minute read',
        content: [
            {
                title: 'The memory problem',
                paragraphs: [
                    'Josh Wolf, Staff Engineer at Chainguard, faced a common challenge: AI coding assistants kept forgetting context between sessions.',
                    'He tried every memory solution available - memory MCPs, memory tools, custom prompts - but nothing provided the persistent context he needed for complex, multi-week projects.'
                ]
            },
            {
                title: 'Factory\'s approach',
                paragraphs: [
                    'Factory\'s Droids maintain context across sessions, understanding not just the current task but the broader project history and codebase patterns.',
                    'This persistent memory allowed Josh to work on complex package updates across hundreds of files over two weeks, all within a single logical session.'
                ]
            },
            {
                title: 'Results',
                paragraphs: [
                    'What would have taken weeks of manual work was completed in days. The Droid maintained perfect context throughout, making intelligent decisions based on the full history of changes.',
                    'Josh\'s experience demonstrates how agent-native development transforms complex, long-running engineering tasks.'
                ]
            }
        ]
    }
];

export function getNewsById(id: string): NewsItem | undefined {
    return NEWS.find(news => news.id === id);
}

export function getAllNews(): NewsItem[] {
    return NEWS;
}
