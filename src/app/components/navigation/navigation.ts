import { Component } from '@angular/core';
import { NavItem } from './nav-item/nav-item';
import { Text, Button, Separator } from "@shared";
import { Landing } from '../landing/landing';

@Component({
  selector: 'app-navigation',
  imports: [NavItem, Text, Button, Separator],
  templateUrl: './navigation.html',
  styles: ``,
})
export class Navigation {
  items: NavItem[] = [];

  constructor() {
    this.items = [
      // { url: '/', label: 'Home' },

      { url: '/contact', label: 'Products' },
      { url: '/about', label: 'About' },
      // { url: '/contact', label: 'Contact' },
      { url: '/contact', label: 'Pricing' },
      { url: '/contact', label: 'Career' },
    ];
  }
}
