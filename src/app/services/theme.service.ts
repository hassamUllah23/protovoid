import { Injectable, signal, PLATFORM_ID, inject, effect } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  private platformId = inject(PLATFORM_ID);
  private isBrowser = isPlatformBrowser(this.platformId);
  isDarkMode = signal<boolean>(this.getInitialTheme());

  constructor() {
    effect(() => {
      const isDark = this.isDarkMode();
      this.applyTheme(isDark);
    });
  }

  private getInitialTheme(): boolean {
    if (!this.isBrowser) {
      return true;
    }
    
    const saved = localStorage.getItem('theme');
    if (saved) {
      return saved === 'dark';
    }

    return true;
  }

  toggleTheme(): void {
    const newMode = !this.isDarkMode();
    this.isDarkMode.set(newMode);
    if (this.isBrowser) {
      localStorage.setItem('theme', newMode ? 'dark' : 'light');
    }
  }

  private applyTheme(isDark: boolean): void {
    if (!this.isBrowser) {
      return;
    }

    const htmlElement = document.documentElement;
    const bodyElement = document.body;
    
    if (isDark) {
      htmlElement.setAttribute('data-theme', 'dark');
      bodyElement.setAttribute('data-theme', 'dark');
    } else {
      htmlElement.removeAttribute('data-theme');
      bodyElement.removeAttribute('data-theme');
    }
  }
}
