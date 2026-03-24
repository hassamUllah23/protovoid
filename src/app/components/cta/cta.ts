import { Component } from '@angular/core';
import { Text, Dot } from '@shared';

@Component({
  selector: 'app-cta',
  standalone: true,
  imports: [Text, Dot],
  templateUrl: './cta.html',
  styleUrl: './cta.css',
})
export class Cta {}
