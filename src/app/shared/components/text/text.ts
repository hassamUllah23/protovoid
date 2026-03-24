import { Component, Input } from '@angular/core';
import { BaseComponent } from '@utils/interfaces';

@Component({
  selector: 'base-text',
  imports: [],
  templateUrl: './text.html',
  styles: ``,
})
export class Text implements BaseComponent {
  @Input() text = '';
  @Input({}) variant: 'xs' | 'small' | 'text' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' = 'text';
  @Input() classes = '';

  getClasses(): string {
    const variantStyles = {
      xs: 'text-[0.75rem] font-normal leading-relaxed font-secondary',
      small: 'text-[0.875rem] font-normal leading-relaxed font-secondary',
      text: 'text-base font-normal leading-relaxed font-secondary',
      h1: 'text-[2.5rem] font-medium leading-tight font-primary',
      h2: 'text-[2rem] font-medium leading-tight font-primary',
      h3: 'text-[1.5rem] font-normal leading-snug font-primary',
      h4: 'text-[1.25rem] font-normal leading-snug font-primary',
      h5: 'text-[1.125rem] font-normal leading-normal font-primary',
      h6: 'text-[1rem] font-normal leading-normal font-primary'
    };

    const baseClasses = variantStyles[this.variant];

    return [baseClasses, this.classes].filter(Boolean).join(' ');
  }
}
