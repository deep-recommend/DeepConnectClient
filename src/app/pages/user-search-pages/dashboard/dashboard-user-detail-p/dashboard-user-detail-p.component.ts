import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { UserProps } from 'src/app/states/user/user.model';
import { LangService } from '../../../../general/services/lang.service';

@Component({
    selector: 'app-dashboard-user-detail-p',
    templateUrl: './dashboard-user-detail-p.component.html',
    styleUrls: ['./dashboard-user-detail-p.component.scss'],
})
export class DashboardUserDetailPComponent implements OnInit {
    @Input() user?: UserProps;

    @Output() clickUsersToDetail: EventEmitter<number> =
        new EventEmitter<number>();

    get birthPlace(): string {
        if (this.user?.birthPlace === '未設定') {
            return this.lang.isEn ? 'Unselected' : '未選択';
        } else {
            return String(this.user?.birthPlace);
        }
    }

    constructor(public readonly lang: LangService) {}

    ngOnInit(): void {}

    onClickUsersToDetail(): void {
        this.clickUsersToDetail.emit(this.user?.id);
    }
}
