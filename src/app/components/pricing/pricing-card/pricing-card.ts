import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Text, Dot, Ul, Divider } from '@shared';
import { PricingPlan } from '../../../data/pricing.data';

@Component({
    selector: 'app-pricing-card',
    standalone: true,
    imports: [CommonModule, Text, Dot, Ul, Divider],
    templateUrl: './pricing-card.html',
})
export class PricingCard {
    @Input({ required: true }) plan!: PricingPlan;
}
