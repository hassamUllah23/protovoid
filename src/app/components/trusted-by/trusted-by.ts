import { Component } from '@angular/core';
import { Dot } from '../../shared/components/dot/dot';

@Component({
  selector: 'app-trusted-by',
  standalone: true,
  imports: [Dot],
  templateUrl: './trusted-by.html',
  styleUrl: './trusted-by.css',
})
export class TrustedBy {
  trustedBySvgs: string[] = [
    'icon1.svg',
    'icon1.svg',
    'icon1.svg',
    'icon1.svg',
    'icon1.svg',
  ];
}
