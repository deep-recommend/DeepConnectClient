import { Component, Input, OnInit } from '@angular/core';
import { LangService } from '../../services/lang.service';

@Component({
    selector: 'app-profile-table',
    templateUrl: './profile-table.component.html',
    styleUrls: ['./profile-table.component.scss'],
})
export class ProfileTableComponent implements OnInit {
    @Input() profile: any;

    get age(): string {
        return Number(this.profile?.age) > 100
            ? this.lang.isEn
                ? 'Unset'
                : '未設定'
            : String(this.profile?.age);
    }

    constructor(private readonly lang: LangService) {}

    ngOnInit(): void {}
}
