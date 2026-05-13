import { Component, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { Dot, ImageFullscreen, Text } from '@shared';
import { PROJECTS, Project } from '../../data/projects.data';

@Component({
  selector: 'app-project-detail',
  standalone: true,
  imports: [CommonModule, RouterLink, Dot, ImageFullscreen, Text],
  templateUrl: './project-detail.html',
  styleUrl: './project-detail.css'
})
export class ProjectDetail {
  private route = inject(ActivatedRoute);
  
  project = signal<Project | null>(null);

  constructor() {
    this.route.params.subscribe(params => {
      const projectId = params['id'];
      const found = PROJECTS.find(p => p.id === projectId);
      this.project.set(found || null);
    });
  }

  formatDate(dateString: string): string {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'long',
      day: 'numeric'
    });
  }

  getAllImages(): string[] {
    const proj = this.project();
    if (!proj) return [];
    return [...(proj.images.length === 0 ? [proj.bannerImage] : []), ...proj.images];
  }

  openUrl(url: string): void {
    window.open(url, '_blank');
  }

  scrollTo(sectionId: string): void {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }
}
