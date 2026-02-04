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
    const headingClasses = 'font-primary';

    const variantStyles = {

      xs: 'text-[0.75rem] font-normal leading-relaxed',
      small: 'text-[0.875rem] font-normal leading-relaxed',
      text: 'text-base font-medium leading-relaxed',
      h1: `text-[2.5rem] font-bold leading-tight ${headingClasses}`,
      h2: `text-[2rem] font-bold leading-tight ${headingClasses}`,
      h3: `text-[1.5rem] font-semibold leading-snug ${headingClasses}`,
      h4: `text-[1.25rem] font-semibold leading-snug ${headingClasses}`,
      h5: `text-[1.125rem] font-medium leading-normal ${headingClasses}`,
      h6: `text-[1rem] font-medium leading-normal ${headingClasses}`
    };

    const baseClasses = variantStyles[this.variant];

    return [baseClasses, this.classes].filter(Boolean).join(' ');
  }
}
