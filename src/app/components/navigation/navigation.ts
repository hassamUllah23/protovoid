import { Component, inject, signal, OnInit, OnDestroy } from '@angular/core';
import { RouterLink, Router, NavigationEnd } from '@angular/router';
import { CommonModule } from '@angular/common';
import { NavItem } from './nav-item/nav-item';
import { IconButton, Separator } from "@shared";
import { ThemeService } from '../../services/theme.service';
import { NgIconsModule } from '@ng-icons/core';
import { filter, Subscription } from 'rxjs';

@Component({
  selector: 'app-navigation',
  imports: [NavItem, IconButton, Separator, NgIconsModule, RouterLink, CommonModule],
  templateUrl: './navigation.html',
  styles: `
    .logo-text {
      line-height: 1;
    }

    .logo-char {
      display: inline-block;
      position: relative;
      overflow: hidden;
      height: 1em;
      line-height: 1;
      vertical-align: top;
    }

    .logo-char span {
      display: block;
      height: 1em;
      line-height: 1;
      transition: transform 0.4s cubic-bezier(0.16, 1, 0.3, 1);
    }

    .logo-char span:last-child {
      position: absolute;
      top: 0;
      left: 0;
      transform: translateY(-100%);
    }

    .logo-text:hover .logo-char span:first-child,
    .logo-text.animating .logo-char span:first-child {
      transform: translateY(100%);
    }

    .logo-text:hover .logo-char span:last-child,
    .logo-text.animating .logo-char span:last-child {
      transform: translateY(0);
    }

    .logo-char:nth-child(1) span { transition-delay: 0ms; }
    .logo-char:nth-child(2) span { transition-delay: 30ms; }
    .logo-char:nth-child(3) span { transition-delay: 60ms; }
    .logo-char:nth-child(4) span { transition-delay: 90ms; }
    .logo-char:nth-child(5) span { transition-delay: 120ms; }
    .logo-char:nth-child(6) span { transition-delay: 150ms; }
    .logo-char:nth-child(7) span { transition-delay: 180ms; }
    .logo-char:nth-child(8) span { transition-delay: 210ms; }
    .logo-char:nth-child(9) span { transition-delay: 240ms; }
  `,
})
export class Navigation implements OnInit, OnDestroy {
  private themeService = inject(ThemeService);
  private router = inject(Router);
  private routerSub?: Subscription;
  
  items: NavItem[] = [];
  hoveredIndex: number | null = null;
  isDarkMode = this.themeService.isDarkMode;
  companyName = 'PROTOVOID'.split('');
  logoAnimating = signal(false);

  constructor() {
    this.items = [
      // { url: '/', label: 'Home' },

      { url: '/services', label: 'Services' },
      { url: '/projects', label: 'Projects' },
      // { url: '/contact', label: 'Contact' },
      { url: '/pricing', label: 'Pricing' },
      { url: '/company', label: 'Company' },
      { url: '/careers', label: 'Careers' },
    ];
  }

  ngOnInit() {
    this.triggerLogoAnimation();
    
    this.routerSub = this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe(() => {
        this.triggerLogoAnimation();
      });
  }

  ngOnDestroy() {
    this.routerSub?.unsubscribe();
  }

  private triggerLogoAnimation() {
    this.logoAnimating.set(true);
    setTimeout(() => {
      this.logoAnimating.set(false);
    }, 600);
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
