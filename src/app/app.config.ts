import { ApplicationConfig, provideBrowserGlobalErrorListeners } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideIcons } from '@ng-icons/core';
import { octSun, octMoon } from '@ng-icons/octicons';
import { radixGithubLogo, radixLinkedinLogo, radixTwitterLogo } from '@ng-icons/radix-icons';

import { routes } from './app.routes';
import { provideClientHydration, withEventReplay } from '@angular/platform-browser';
import { provideAnimations } from '@angular/platform-browser/animations';

export const appConfig: ApplicationConfig = {
  providers: [
    provideAnimations(),
    provideBrowserGlobalErrorListeners(),
    provideRouter(routes),
    provideClientHydration(withEventReplay()),
    provideIcons({
      octSun,
      octMoon,
      radixGithubLogo,
      radixLinkedinLogo,
      radixTwitterLogo,
    })
  ]
};
