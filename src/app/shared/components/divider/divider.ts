import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'base-divider',
    standalone: true,
    imports: [CommonModule],
    template: `
        <div 
            class="w-full border-t border-dashed"
            [ngClass]="borderClass"
            [class.my-4]="spacing === 'sm'"
            [class.my-6]="spacing === 'md'"
            [class.my-8]="spacing === 'lg'">
        </div>
    `,
})
export class Divider {
    @Input() spacing: 'sm' | 'md' | 'lg' | 'none' = 'none';
    @Input() borderClass: string = 'border-tertiary';
}
