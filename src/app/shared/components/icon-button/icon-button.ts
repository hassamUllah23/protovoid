import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BaseComponent } from '@utils/interfaces';

@Component({
  selector: 'base-icon-button',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './icon-button.html',
})
export class IconButton implements BaseComponent {
  @Input() size: 'sm' | 'md' | 'lg' = 'md';
  @Input() variant: 'primary' | 'secondary' | 'tertiary' | 'ghost' = 'ghost';
  @Input() disabled = false;
  @Input() ariaLabel = '';
  @Input() onClick: (() => void) | undefined;

  @Output() clicked = new EventEmitter<MouseEvent>();

  onButtonClick(event: MouseEvent) {
    if (this.disabled) return;

    this.clicked.emit(event);

    if (this.onClick) {
      this.onClick();
    }
  }

  getClasses(): string {
    const baseClasses = [
      'inline-flex',
      'items-center',
      'justify-center',
      'rounded-full',
      'transition-all',
      'duration-200',
      'border-none',
      'outline-none',
      'focus:outline-none',
      'focus:ring-0',
      'focus-visible:ring-0',
      'disabled:opacity-50',
      'disabled:cursor-not-allowed',
    ];

    const sizeClasses = {
      sm: ['w-8', 'h-8'],
      md: ['w-10', 'h-10'],
      lg: ['w-12', 'h-12'],
    };

    const variantClasses = {
      primary: [
        'bg-primary',
        'text-secondary',
        'hover:bg-primary/90',
      ],
      secondary: [
        'bg-secondary',
        'text-[color:var(--color-bg)]',
        'hover:bg-secondary/90',
      ],
      tertiary: [
        'bg-tertiary',
        'text-secondary',
        'hover:bg-tertiary/90',
      ],
      ghost: [
        'bg-transparent',
        'text-primary',
        'hover:bg-tertiary/20',
      ],
    };

    const disabledClasses = this.disabled ? ['pointer-events-none'] : [];

    return [
      ...baseClasses,
      ...sizeClasses[this.size],
      ...variantClasses[this.variant],
      ...disabledClasses,
    ].join(' ');
  }
}
