import { Component, Input, OnInit } from '@angular/core';
import { birthDayToAge } from 'src/app/general/functions/birthday-to-age';
import { UserProps } from 'src/app/states/user';

@Component({
    selector: 'app-dashboard-user-list-p',
    templateUrl: './dashboard-user-list-p.component.html',
    styleUrls: ['./dashboard-user-list-p.component.scss'],
})
export class DashboardUserListPComponent implements OnInit {
    @Input() users: UserProps[] | null = [];

    constructor() {}

    ngOnInit() {}

    birthDayToAge = birthDayToAge;
}
