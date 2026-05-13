import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'base-container',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div 
      [class]="'border border-tertiary/20 rounded-lg ' + padding + ' ' + classes"
      style="background-color: rgba(var(--color-tertiary-rgb), 0.15);"
    >
      <ng-content />
    </div>
  `,
})
export class Container {
  @Input() padding: string = 'p-4 sm:p-6 md:p-8';
  @Input() classes: string = '';
}
