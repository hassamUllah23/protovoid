import { Component } from '@angular/core';
import { Landing } from '../../components/landing/landing';
import { TrustedBy } from '../../components/trusted-by/trusted-by';

@Component({
    selector: 'app-home',
    standalone: true,
    imports: [Landing, TrustedBy],
    templateUrl: './home.html',
})
export class Home {

}
