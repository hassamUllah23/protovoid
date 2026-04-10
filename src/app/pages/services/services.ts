import { Component, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { NgIconsModule } from '@ng-icons/core';
import { Text } from '@shared';
import { SERVICES, Service } from '../../data/services.data';

interface Stat {
  value: number;
  suffix: string;
  label: string;
  current: number;
}

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [CommonModule, RouterLink, NgIconsModule, Text],
  templateUrl: './services.html',
  styleUrl: './services.css'
})
export class Services implements OnInit {
  services: Service[] = SERVICES;
  
  stats = signal<Stat[]>([
    { value: 50, suffix: '+', label: 'Projects Delivered', current: 0 },
    { value: 8, suffix: '+', label: 'Years Experience', current: 0 },
    { value: 30, suffix: '+', label: 'Happy Clients', current: 0 },
    { value: 99, suffix: '%', label: 'Client Satisfaction', current: 0 }
  ]);

  ngOnInit() {
    this.animateStats();
  }

  animateStats() {
    const duration = 2000;
    const steps = 60;
    const interval = duration / steps;
    
    let step = 0;
    const timer = setInterval(() => {
      step++;
      const progress = this.easeOutQuart(step / steps);
      
      this.stats.update(stats => 
        stats.map(stat => ({
          ...stat,
          current: Math.round(stat.value * progress)
        }))
      );
      
      if (step >= steps) {
        clearInterval(timer);
      }
    }, interval);
  }

  easeOutQuart(x: number): number {
    return 1 - Math.pow(1 - x, 4);
  }

  isOcticon(icon: string): boolean {
    return icon.startsWith('oct');
  }

  getIconPath(icon: string): string {
    const icons: Record<string, string> = {
      'globe': 'M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9',
      'device-mobile': 'M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z',
      'palette': 'M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01',
      'cloud': 'M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z',
      'code': 'M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4',
      'cpu': 'M9 3v2m6-2v2M9 19v2m6-2v2M3 9h2m-2 6h2m14-6h2m-2 6h2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z',
      'lightbulb': 'M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z'
    };
    return icons[icon] || icons['code'];
  }
}
