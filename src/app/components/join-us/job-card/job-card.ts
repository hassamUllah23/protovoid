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

    getTagClasses(): string {
        return 'px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider rounded border border-tertiary/30 text-tertiary';
    }

    formatType(type: string): string {
        return type.split('-').map(word => 
            word.charAt(0).toUpperCase() + word.slice(1)
        ).join(' ');
    }
}
