import { Component } from '@angular/core';
import { Mission } from '../../components/mission/mission';
import { JoinUs } from '../../components/join-us/join-us';

@Component({
    selector: 'app-company',
    standalone: true,
    imports: [Mission, JoinUs],
    templateUrl: './company.html',
})
export class Company {

}
