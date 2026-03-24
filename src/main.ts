import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { App } from './app/app';

const savedTheme = localStorage.getItem('theme');
const initialTheme = savedTheme || 'dark';

if (initialTheme === 'dark') {
  document.documentElement.setAttribute('data-theme', 'dark');
}

bootstrapApplication(App, appConfig)
  .catch((err) => console.error(err));
