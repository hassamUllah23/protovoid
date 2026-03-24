import { Component, Input, ElementRef, OnInit, OnDestroy, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'base-dot',
  standalone: true,
  imports: [CommonModule],
  template: `<span class="dot" [class.flickering]="isHovered()"></span>`,
  styles: `
    :host {
      display: inline-flex;
      align-items: center;
    }

    .dot {
      width: 8px;
      height: 8px;
      border-radius: 50%;
      background-color: var(--color-primary);
    }

    @keyframes flicker {
      0% { opacity: 1; }
      5% { opacity: 0; }
      10% { opacity: 1; }
      15% { opacity: 0.1; }
      20% { opacity: 1; }
      30% { opacity: 0; }
      35% { opacity: 0.8; }
      40% { opacity: 0; }
      50% { opacity: 1; }
      55% { opacity: 0; }
      60% { opacity: 0.5; }
      65% { opacity: 0; }
      70% { opacity: 1; }
      80% { opacity: 0; }
      85% { opacity: 1; }
      90% { opacity: 0; }
      95% { opacity: 0.7; }
      100% { opacity: 1; }
    }

    .dot.flickering {
      animation: flicker 1.5s ease-in-out infinite;
    }
  `,
})
export class Dot implements OnInit, OnDestroy {
  @Input() flicker = true;
  
  isHovered = signal(false);
  private parentElement: HTMLElement | null = null;
  private onMouseEnter = () => this.isHovered.set(true);
  private onMouseLeave = () => this.isHovered.set(false);

  constructor(private el: ElementRef) {}

  ngOnInit() {
    if (this.flicker) {
      this.parentElement = this.el.nativeElement.parentElement;
      if (this.parentElement) {
        this.parentElement.addEventListener('mouseenter', this.onMouseEnter);
        this.parentElement.addEventListener('mouseleave', this.onMouseLeave);
      }
    }
  }

  ngOnDestroy() {
    if (this.parentElement) {
      this.parentElement.removeEventListener('mouseenter', this.onMouseEnter);
      this.parentElement.removeEventListener('mouseleave', this.onMouseLeave);
    }
  }
}
