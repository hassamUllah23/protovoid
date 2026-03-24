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

export interface NewsItem {
    id: string;
    tag: string;
    isNew: boolean;
    heading: string;
    description: string;
    date: string;
    readTime: string;
    content: NewsSection[];
}

export interface NewsSection {
    title: string;
    paragraphs: string[];
}

export type { BaseComponent }