import { Component, inject } from '@angular/core';
import { NavItem } from './nav-item/nav-item';
import { Text, Button, Separator } from "@shared";
import { ThemeService } from '../../services/theme.service';
import { NgIconsModule } from '@ng-icons/core';

@Component({
  selector: 'app-navigation',
  imports: [NavItem, Text, Button, Separator, NgIconsModule],
  templateUrl: './navigation.html',
  styles: ``,
})
export class Navigation {
  private themeService = inject(ThemeService);
  
  items: NavItem[] = [];
  hoveredIndex: number | null = null;
  isDarkMode = this.themeService.isDarkMode;

  constructor() {
    this.items = [
      // { url: '/', label: 'Home' },

      { url: '/contact', label: 'Products' },
      { url: '/about', label: 'About' },
      // { url: '/contact', label: 'Contact' },
      { url: '/contact', label: 'Pricing' },
      { url: '/company', label: 'Company' },
      { url: '/careers', label: 'Careers' },
    ];
  }

  onNavItemHover(index: number): void {
    this.hoveredIndex = index;
  }

  onNavItemLeave(): void {
    this.hoveredIndex = null;
  }

  getNavItemClasses(index: number): string {
    if (this.hoveredIndex !== null && this.hoveredIndex !== index) {
      return 'opacity-50 transition-opacity duration-200';
    }
    return 'transition-opacity duration-200';
  }

  toggleTheme(): void {
    this.themeService.toggleTheme();
  }
}
