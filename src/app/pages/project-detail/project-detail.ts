import { Component, inject, signal, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { Dot } from '@shared';
import { PROJECTS, Project } from '../../data/projects.data';

@Component({
  selector: 'app-project-detail',
  standalone: true,
  imports: [CommonModule, RouterLink, Dot],
  templateUrl: './project-detail.html',
  styleUrl: './project-detail.css'
})
export class ProjectDetail {
  private route = inject(ActivatedRoute);
  
  project = signal<Project | null>(null);
  selectedImage = signal<string | null>(null);

  constructor() {
    this.route.params.subscribe(params => {
      const projectId = params['id'];
      const found = PROJECTS.find(p => p.id === projectId);
      this.project.set(found || null);
      if (found) {
        this.selectedImage.set(found.bannerImage);
      }
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

  selectImage(image: string): void {
    this.selectedImage.set(image);
  }

  openUrl(url: string): void {
    window.open(url, '_blank');
  }
}
