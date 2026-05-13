import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Dot, Text } from '@shared';

@Component({
  selector: 'app-cta',
  standalone: true,
  imports: [Dot, RouterLink, Text],
  templateUrl: './cta.html',
  styleUrl: './cta.css',
})
export class Cta {}
