import { Component, signal, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JobFilter } from './job-filter/job-filter';
import { JobCard } from './job-card/job-card';
import { JOBS, getUniqueLocations } from '../../data/jobs.data';
import { Job } from '@utils/interfaces';
import { Text, Dot } from '@shared';

@Component({
    selector: 'app-join-us',
    standalone: true,
    imports: [CommonModule, JobFilter, JobCard, Text, Dot],
    templateUrl: './join-us.html',
})
export class JoinUs {
    activeFilter = signal<string>('all');
    activeLocation = signal<string>('all');
    
    locations = getUniqueLocations();
    
    filteredJobs = computed<Job[]>(() => {
        let jobs = JOBS;
        
        const filter = this.activeFilter();
        if (filter !== 'all') {
            jobs = jobs.filter(job => job.tags.includes(filter as any));
        }
        
        const location = this.activeLocation();
        if (location !== 'all') {
            jobs = jobs.filter(job => job.location === location);
        }
        
        return jobs;
    });

    onFilterChange(filter: string): void {
        this.activeFilter.set(filter);
    }

    onLocationChange(location: string): void {
        this.activeLocation.set(location);
    }
}
