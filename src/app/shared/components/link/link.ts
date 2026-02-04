import { Component, Input } from '@angular/core';
import { Icon } from '@shared/shared.imports';
import { BaseComponent } from '@utils/interfaces';

type LinkVariant = 'primary' | 'secondary' | 'tertiary';

@Component({
  selector: 'base-link',
  imports: [],
  templateUrl: './link.html',
  styles: ``,
})
export class Link implements BaseComponent {
  @Input() url = '';
  @Input() label = '';
  @Input() target: '_self' | '_blank' | '_parent' | '_top' = '_self';
  @Input() variant: LinkVariant = 'primary';
  @Input() disabled = false;
  @Input() onClick?: ((event: MouseEvent) => void) = () => { };
  @Input() icon?: Icon;
  @Input() iconPosition: 'left' | 'right' = 'left';
  @Input() animate: boolean = true;

  constructor() {
    this.onClick = () => { };
  }

  getClasses(): string {
    const variantColorClasses: Record<LinkVariant, string[]> = {
      primary: ['text-primary'],
      secondary: ['text-secondary'],
      tertiary: ['text-tertiary'],
    };

    return [
      'text-primary'
      // ...(variantColorClasses[this.variant]),
      // ...[,
      // ],
      // ...['hover:text-primary',
      //   'hover:underline'
      // ],
      // 'transition-colors',
      // ...(this.animate ? ['duration-200',
      //   'ease-in-out', 'hover:animate-'] : []),
      // ...(this.disabled ? ['pointer-events-none', 'opacity-50'] : []),
    ].join(' ');
  }
}
