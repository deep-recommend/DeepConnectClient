import { Component, EventEmitter, Input, Output } from '@angular/core';
import { UserProps } from '../../../../states/user/user.model';

@Component({
    selector: 'app-my-page-panel-user-detail-p',
    templateUrl: './my-page-panel-user-detail-p.component.html',
    styleUrls: ['./my-page-panel-user-detail-p.component.scss'],
})
export class MyPagePanelUserDetailPComponent {
    @Input() user!: UserProps | null;
}
