import { Component, Input } from '@angular/core';
import { Link } from "@shared";

@Component({
  selector: 'app-nav-item',
  imports: [Link],
  templateUrl: './nav-item.html',
  styles: ``,
})
export class NavItem {
  @Input() url = '';
  @Input() label = '';
  @Input({ required: false }) classes?: string = '';
}
