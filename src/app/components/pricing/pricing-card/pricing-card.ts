import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Text, Dot, Ul, Divider } from '@shared';
import { PricingPlan } from '../../../data/pricing.data';

@Component({
    selector: 'app-pricing-card',
    standalone: true,
    imports: [CommonModule, Text, Dot, Ul, Divider],
    templateUrl: './pricing-card.html',
    styles: `
        @keyframes blurredReveal {
            0% {
                opacity: 0;
                filter: blur(8px);
                transform: translateY(-15px);
            }
            60% {
                opacity: 1;
            }
            100% {
                opacity: 1;
                filter: blur(0px);
                transform: translateY(0);
            }
        }

        .reveal-item {
            opacity: 0;
            animation: blurredReveal 1.2s cubic-bezier(0.05, 0.7, 0.1, 1) forwards;
        }

        .delay-1 { animation-delay: 0.1s; }
        .delay-2 { animation-delay: 0.25s; }
        .delay-3 { animation-delay: 0.4s; }
        .delay-4 { animation-delay: 0.55s; }
        .delay-5 { animation-delay: 0.7s; }
    `,
})
export class PricingCard {
    @Input({ required: true }) plan!: PricingPlan;
}
