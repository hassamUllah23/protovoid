interface BaseComponent {
    getClasses(): string;
}

export type JobTag = 'engineering' | 'qa' | 'design' | 'hr' | 'management';
export type JobType = 'full-time' | 'part-time';

export interface Job {
    id: string;
    title: string;
    description: string;
    location: string;
    openings: number;
    tags: JobTag[];
    type: JobType;
    responsibilities: string[];
    qualifications: string[];
}

export type { BaseComponent }