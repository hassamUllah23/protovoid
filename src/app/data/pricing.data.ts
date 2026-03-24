export interface PricingFeatureGroup {
    title: string;
    features: string[];
}

export interface PricingPlan {
    id: string;
    index: string;
    name: string;
    price: string | null;
    priceUnit: string;
    description: string;
    featureGroups: PricingFeatureGroup[];
    ctaLabel: string;
    ctaVariant: 'primary' | 'secondary';
    highlighted?: boolean;
}

export const PRICING_PLANS: PricingPlan[] = [
    {
        id: 'pro',
        index: '01',
        name: 'Pro',
        price: '$20',
        priceUnit: '/mo',
        description: 'Complete coding agent workspace for individuals and small teams.',
        featureGroups: [
            {
                title: 'Dedicated compute with frontier models',
                features: [
                    '10M Factory Standard Credits, shared across all models',
                    '+10M bonus credits',
                    'Fast and direct priority routing, the day the model is available'
                ]
            },
            {
                title: 'Agent-native, multi-platform experience',
                features: [
                    'Desktop / Web / CLI',
                    'Cloud & local background agents',
                    'Expanded first-party integrations'
                ]
            },
            {
                title: 'Team collaboration',
                features: [
                    'Up to 2 team members ($6 per additional seat)',
                    'Track analytics, billing, and usage statistics',
                    'Agent-readiness dashboard'
                ]
            }
        ],
        ctaLabel: 'Sign Up',
        ctaVariant: 'primary'
    },
    {
        id: 'max',
        index: '02',
        name: 'Max',
        price: '$200',
        priceUnit: '/mo',
        description: 'Everything in Pro, plus:',
        featureGroups: [
            {
                title: 'Expanded reserved capacity',
                features: [
                    '100M Factory Standard Credits, shared across all models',
                    '+100M bonus credits',
                    'Early access to new features'
                ]
            },
            {
                title: 'Team collaboration',
                features: [
                    '5 seats cap ($5 per additional seat)'
                ]
            }
        ],
        ctaLabel: 'Sign Up',
        ctaVariant: 'primary'
    },
    {
        id: 'enterprise',
        index: '03',
        name: 'Enterprise',
        price: null,
        priceUnit: '',
        description: 'Everything in Max, plus:',
        featureGroups: [
            {
                title: 'Enterprise scale',
                features: [
                    'Unlimited team members',
                    'Custom messaging and credit limits',
                    'Advanced repository permissions'
                ]
            },
            {
                title: 'Enterprise features',
                features: [
                    'Enterprise scale codebase analysis',
                    'Audit logging and activity trails',
                    'Agent-readiness Improvement Program',
                    'Enterprise-specific automation cookbook',
                    'Single Sign-On (SSO) integration',
                    'SAML/SCIM provisioning',
                    'Audit logging and compliance reporting',
                    'On-premise deployment options'
                ]
            },
            {
                title: 'Premium support',
                features: [
                    'Dedicated Account Manager and Customer Engineer',
                    'Priority support with SLAs',
                    'Custom onboarding program'
                ]
            }
        ],
        ctaLabel: 'Contact Sales',
        ctaVariant: 'secondary',
        highlighted: true
    }
];
