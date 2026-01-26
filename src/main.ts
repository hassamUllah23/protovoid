console.log({ theme: Defaults.theme })
document.documentElement.setAttribute(
  'data-theme', 'light');

import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { App } from './app/app';
import { Defaults } from '@utils/defaults';

bootstrapApplication(App, appConfig)
  .catch((err) => console.error(err));
