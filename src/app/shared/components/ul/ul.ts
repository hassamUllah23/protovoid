import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'base-ul',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './ul.html',
})
export class Ul {
  @Input() items: string[] = [];
  @Input() textClass: string = 'text-tertiary';
  @Input() markerClass: string = 'marker:text-tertiary';
}
