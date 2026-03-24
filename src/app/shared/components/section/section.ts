import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SectionHeader } from '../section-header/section-header';

@Component({
    selector: 'base-section',
    standalone: true,
    imports: [CommonModule, SectionHeader],
    templateUrl: './section.html',
})
export class Section {
    @Input({ required: true }) label!: string;
    @Input() actionLabel = '';
    @Input() actionLink = '';
}
