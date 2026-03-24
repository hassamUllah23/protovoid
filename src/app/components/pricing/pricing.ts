import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PricingCard } from './pricing-card/pricing-card';
import { PRICING_PLANS } from '../../data/pricing.data';
import { Text, Dot } from '@shared';

@Component({
    selector: 'app-pricing',
    standalone: true,
    imports: [CommonModule, PricingCard, Text, Dot],
    templateUrl: './pricing.html',
})
export class Pricing {
    plans = PRICING_PLANS;
}
