import { Component, Input } from '@angular/core';
import { Icon } from '@shared/shared.imports';
import { BaseComponent } from '@utils/interfaces';

type LinkVariant = 'primary' | 'secondary' | 'tertiary';

@Component({
  selector: 'base-link',
  imports: [],
  templateUrl: './link.html',
  styles: `
    a {
      position: relative;
      display: inline-block;
    }

    span {
      position: relative;
      display: inline-block;
    }

    span::after {
      content: '';
      position: absolute;
      bottom: -2px;
      left: 0;
      width: 100%;
      height: 2px;
      background-color: var(--color-primary);
      transform: scaleX(0);
      transform-origin: left;
      transition: transform 0.3s ease-in-out;
    }

    a:hover span::after {
      transform: scaleX(1);
    }
  `,
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
    return [
      'text-primary',
      'transition-all',
      'duration-200',
      'ease-in-out'
    ].join(' ');
  }
}
