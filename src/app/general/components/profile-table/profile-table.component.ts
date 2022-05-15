import { Component, Input, OnInit } from '@angular/core';
import { UserProps } from '../../../states/user/user.model';

@Component({
    selector: 'app-profile-table',
    templateUrl: './profile-table.component.html',
    styleUrls: ['./profile-table.component.scss'],
})
export class ProfileTableComponent implements OnInit {
    @Input() profile: any;

    constructor() {}

    ngOnInit(): void {}
}
