import { Component, EventEmitter, Input, Output } from '@angular/core';
import { UserProps } from 'src/app/states/user/user.model';
import { LangService } from '../../../../general/services/lang.service';

@Component({
    selector: 'app-user-detail-p',
    templateUrl: './user-detail-p.component.html',
    styleUrls: ['./user-detail-p.component.scss'],
})
export class UserDetailPComponent {
    @Input() user?: UserProps | null;
    @Input() matched?: boolean | null;

    @Output() clickUserToMessage: EventEmitter<void> = new EventEmitter<void>();

    get age(): string {
        return Number(this.user?.age) > 100
            ? this.lang.isEn
                ? 'Unset'
                : '未設定'
            : String(this.user?.age);
    }

    onClickToDetails(): void {
        this.clickUserToMessage.emit();
    }

    constructor(private readonly lang: LangService) {}
}
