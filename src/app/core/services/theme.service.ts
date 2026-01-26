import { Injectable } from '@angular/core';
import { Themes } from '@utils/constants';

@Injectable({
  providedIn: 'root',
})
export class Theme {
  toggle() {
    const root = document.documentElement;
    const isDark = root.getAttribute('data-theme') === Themes.dark;

    const next = isDark ? Themes.light : Themes.dark;
    root.setAttribute('data-theme', next);
    localStorage.setItem('theme', next);
  } 
}
