import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Value {
    number: string;
    text: string;
}

@Component({
    selector: 'app-mission',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './mission.html',
})
export class Mission {
    missionStatement = 'At Factory, our mission is to Bring Autonomy to Software Engineering. In order to accomplish our ambitious goal, we must:';
    
    values: Value[] = [
        { number: '01', text: 'Champion the mission' },
        { number: '02', text: 'Be relentless' },
        { number: '03', text: 'Build together' },
        { number: '04', text: 'Embrace perspectives' },
        { number: '05', text: 'Earn the right' },
        { number: '06', text: 'Create obsessed customers' },
    ];
}
