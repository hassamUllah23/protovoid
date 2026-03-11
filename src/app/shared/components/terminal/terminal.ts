import { Component, Input } from '@angular/core';

@Component({
  selector: 'base-terminal',
  standalone: true,
  templateUrl: './terminal.html',
  styleUrl: './terminal.css',
})
export class Terminal {
  @Input() command = '';
  @Input() platforms = ['MACOS / LINUX'];
  @Input() showComingSoon = true;

  activePlatform = 'MACOS / LINUX';

  copyToClipboard(): void {
    navigator.clipboard.writeText(this.command);
  }
}
