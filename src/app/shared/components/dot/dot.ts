import { Component } from '@angular/core';

@Component({
  selector: 'base-dot',
  standalone: true,
  templateUrl: './dot.html',
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
  `,
})
export class Dot {}
