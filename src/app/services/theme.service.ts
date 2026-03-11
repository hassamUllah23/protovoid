import { Injectable, signal, PLATFORM_ID, inject, effect } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  private platformId = inject(PLATFORM_ID);
  isDarkMode = signal<boolean>(false);

  constructor() {
    if (isPlatformBrowser(this.platformId)) {
      const initialTheme = this.getInitialTheme();
      this.isDarkMode.set(initialTheme);
      this.applyTheme(initialTheme);

      effect(() => {
        const isDark = this.isDarkMode();
        this.applyTheme(isDark);
      });
    }
  }

  private getInitialTheme(): boolean {
    if (typeof localStorage !== 'undefined') {
      const saved = localStorage.getItem('theme');
      if (saved) {
        return saved === 'dark';
      }
    }

    if (typeof window !== 'undefined') {
      return window.matchMedia('(prefers-color-scheme: dark)').matches;
    }

    return false;
  }

  toggleTheme(): void {
    const newMode = !this.isDarkMode();
    this.isDarkMode.set(newMode);
    if (typeof localStorage !== 'undefined') {
      localStorage.setItem('theme', newMode ? 'dark' : 'light');
    }
  }

  private applyTheme(isDark: boolean): void {
    if (!isPlatformBrowser(this.platformId)) {
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
