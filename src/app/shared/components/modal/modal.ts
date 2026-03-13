import { Component, Input, Output, EventEmitter, OnChanges, SimpleChanges } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgIconsModule } from '@ng-icons/core';

@Component({
    selector: 'base-modal',
    standalone: true,
    imports: [CommonModule, NgIconsModule],
    templateUrl: './modal.html',
})
export class Modal implements OnChanges {
    @Input() isOpen = false;
    @Input() title = '';
    @Input() subtitle = '';
    @Input() maxWidth: 'sm' | 'md' | 'lg' | 'xl' | '2xl' = '2xl';
    
    @Output() closed = new EventEmitter<void>();

    ngOnChanges(changes: SimpleChanges): void {
        if (changes['isOpen']) {
            if (this.isOpen) {
                document.body.style.overflow = 'hidden';
            } else {
                document.body.style.overflow = '';
            }
        }
    }

    close(): void {
        this.closed.emit();
    }

    onBackdropClick(): void {
        this.close();
    }

    getMaxWidthClass(): string {
        const widths: Record<string, string> = {
            'sm': 'max-w-sm',
            'md': 'max-w-md',
            'lg': 'max-w-lg',
            'xl': 'max-w-xl',
            '2xl': 'max-w-2xl',
        };
        return widths[this.maxWidth] || 'max-w-2xl';
    }
}
