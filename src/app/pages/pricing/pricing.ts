import { Component } from '@angular/core';
import { Pricing } from '../../components/pricing/pricing';

@Component({
    selector: 'app-pricing-page',
    standalone: true,
    imports: [Pricing],
    templateUrl: './pricing.html',
})
export class PricingPage {

}
