import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Dot } from '../dot/dot';

@Component({
    selector: 'base-section-header',
    standalone: true,
    imports: [CommonModule, RouterModule, Dot],
    templateUrl: './section-header.html',
})
export class SectionHeader {
    @Input({ required: true }) label!: string;
    @Input() actionLabel = '';
    @Input() actionLink = '';
}
