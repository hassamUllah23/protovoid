import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BaseComponent } from '@utils/interfaces';

@Component({
  selector: 'base-button',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './button.html',
})
export class Button implements BaseComponent {
  @Input() label = '';
  @Input() type: 'button' | 'submit' | 'reset' = 'button';
  @Input() variant: 'primary' | 'secondary' | 'tertiary' | 'danger' = 'secondary';
  @Input() disabled = false;
  @Input() loading = false;
  @Input() onClick: (() => void) | undefined;

  @Output() clicked = new EventEmitter<MouseEvent>();

  onButtonClick(event: MouseEvent) {
    if (this.disabled || this.loading) return;

    // Emit the clicked event
    this.clicked.emit(event);

    // Call the onclick callback if provided
    if (this.onClick) {
      this.onClick();
    }
  }

  getClasses(): string {
    const baseClasses = [
      'inline-flex',
      'items-center',
      'justify-center',
      'px-3',
      'py-1.5',
      'text-sm',
      'font-normal',
      'leading-none',
      'rounded-lg',
      'transition-all',
      'duration-200',
      'focus:outline-none',
      'focus:ring-2',
      'focus:ring-offset-2',
      'disabled:opacity-50',
      'disabled:cursor-not-allowed',
      'uppercase',
      'tracking-tight',
    ];

    const variantClasses = {
      primary: [
        'bg-secondary',
        'text-[color:var(--color-bg)]',
      ],
      secondary: [
        'bg-[color:var(--color-bg)]',
        'text-secondary',
        'border',
        'border-secondary/30',
      ],
      tertiary: [
        'bg-tertiary/20',
        'text-secondary',
      ],
      danger: [
        'bg-red-600',
        'text-white',
      ]
    };

    const loadingClasses = this.loading ? ['cursor-wait'] : [];
    const disabledClasses = (this.disabled || this.loading) ? ['pointer-events-none'] : [];

    return [
      ...baseClasses,
      ...variantClasses[this.variant],
      ...loadingClasses,
      ...disabledClasses
    ].join(' ');
  }
}
