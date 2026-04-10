import { Component, Input, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'base-image-fullscreen',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './image-fullscreen.html',
  styleUrl: './image-fullscreen.css'
})
export class ImageFullscreen {
  @Input() images: string[] = [];
  @Input() alt: string = 'Image';
  
  fullscreenImage = signal<string | null>(null);

  openFullscreen(image: string): void {
    this.fullscreenImage.set(image);
    document.body.style.overflow = 'hidden';
  }

  closeFullscreen(): void {
    this.fullscreenImage.set(null);
    document.body.style.overflow = '';
  }

  navigateImage(direction: 'prev' | 'next'): void {
    const currentIndex = this.images.indexOf(this.fullscreenImage() || '');
    if (currentIndex === -1) return;

    let newIndex: number;
    if (direction === 'next') {
      newIndex = (currentIndex + 1) % this.images.length;
    } else {
      newIndex = (currentIndex - 1 + this.images.length) % this.images.length;
    }
    this.fullscreenImage.set(this.images[newIndex]);
  }

  getCurrentIndex(): number {
    return this.images.indexOf(this.fullscreenImage() || '') + 1;
  }
}
