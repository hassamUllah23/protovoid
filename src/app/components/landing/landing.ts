import { Component, inject } from '@angular/core';
import { NgxOrbComponent } from '@omnedia/ngx-orb';
import { isPlatformBrowser } from '@angular/common';
import { PLATFORM_ID } from '@angular/core';
import { Terminal } from '@shared/components/terminal/terminal';
import { DottedContainer } from '@shared';

@Component({
  selector: 'app-landing',
  standalone: true,
  imports: [NgxOrbComponent, Terminal, DottedContainer],
  templateUrl: './landing.html',
  styles: ``,
})
export class Landing {
  private platformId = inject(PLATFORM_ID);
  isBrowser = isPlatformBrowser(this.platformId);
}
