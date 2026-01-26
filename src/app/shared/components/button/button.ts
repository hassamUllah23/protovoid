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
  @Input() variant: 'primary' | 'secondary' | 'danger' = 'secondary';
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
      'px-4',
      'py-2',
      'text-sm',
      'font-medium',
      'rounded-lg',
      'transition-all',
      'duration-200',
      'focus:outline-none',
      'focus:ring-2',
      'focus:ring-offset-2',
      'disabled:opacity-50',
      'disabled:cursor-not-allowed',
      'shadow-sm',
      'text-white',
    ];

    const variantClasses = {
      primary: [
        'bg-blue-600',
        'hover:bg-blue-700',
        'focus:ring-blue-500',

      ],
      secondary: [
        'bg-gray-600',
        'hover:bg-gray-700',
        'focus:ring-gray-500',
      ],
      danger: [
        'bg-red-600',
        'hover:bg-red-700',
        'focus:ring-red-500',
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
