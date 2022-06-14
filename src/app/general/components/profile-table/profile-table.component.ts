import { Component, Input, OnInit } from '@angular/core';
import { UserProps } from '../../../states/user/user.model';

@Component({
    selector: 'app-profile-table',
    templateUrl: './profile-table.component.html',
    styleUrls: ['./profile-table.component.scss'],
})
export class ProfileTableComponent implements OnInit {
    @Input() profile: any;

    get age(): string {
        return Number(this.profile?.age) > 100
            ? '未設定'
            : String(this.profile?.age);
    }

    constructor() {}

    ngOnInit(): void {}
}
