import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Dot } from '../dot/dot';

@Component({
    selector: 'base-dotted-container',
    standalone: true,
    imports: [CommonModule, Dot],
    templateUrl: './dotted-container.html',
    styles: `
        :host {
            display: block;
        }
    `,
})
export class DottedContainer {
    @Input() label = '';
}
