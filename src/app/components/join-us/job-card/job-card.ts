import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Job, JobTag } from '@utils/interfaces';

@Component({
    selector: 'app-job-card',
    standalone: true,
    imports: [CommonModule, RouterModule],
    templateUrl: './job-card.html',
})
export class JobCard {
    @Input({ required: true }) job!: Job;

    getTagClasses(tag: JobTag): string {
        const base = 'px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider rounded border';
        
        const tagColors: Record<JobTag, string> = {
            engineering: 'border-primary/50 text-primary bg-primary/10',
            qa: 'border-blue-500/50 text-blue-400 bg-blue-500/10',
            design: 'border-purple-500/50 text-purple-400 bg-purple-500/10',
            hr: 'border-green-500/50 text-green-400 bg-green-500/10',
            management: 'border-yellow-500/50 text-yellow-400 bg-yellow-500/10',
        };
        
        return `${base} ${tagColors[tag]}`;
    }

    formatType(type: string): string {
        return type.split('-').map(word => 
            word.charAt(0).toUpperCase() + word.slice(1)
        ).join(' ');
    }
}
