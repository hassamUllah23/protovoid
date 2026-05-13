import { Component, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { Job, JobTag } from '@utils/interfaces';
import { getJobById } from '../../data/jobs.data';
import { Modal, Ul, Dot, Text } from '@shared';
import { EmailTemplate } from '../../components/join-us/email-template/email-template';

@Component({
    selector: 'app-job-detail',
    standalone: true,
    imports: [CommonModule, RouterModule, Modal, EmailTemplate, Ul, Dot, Text],
    templateUrl: './job-detail.html',
})
export class JobDetail implements OnInit {
    job = signal<Job | undefined>(undefined);
    isModalOpen = signal<boolean>(false);
    
    constructor(private route: ActivatedRoute) {}
    
    ngOnInit(): void {
        const id = this.route.snapshot.paramMap.get('id');
        if (id) {
            this.job.set(getJobById(id));
        }
    }

    formatType(type: string): string {
        return type.split('-').map(word => 
            word.charAt(0).toUpperCase() + word.slice(1)
        ).join(' ');
    }

    getTagClasses(): string {
        return 'px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider rounded border border-tertiary/30 text-tertiary';
    }

    scrollTo(elementId: string): void {
        const element = document.getElementById(elementId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    }

    openModal(): void {
        this.isModalOpen.set(true);
    }

    closeModal(): void {
        this.isModalOpen.set(false);
    }
}
