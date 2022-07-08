import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { UserProps } from 'src/app/states/user/user.model';
import { LangService } from '../../../../general/services/lang.service';

@Component({
    selector: 'app-my-page-p',
    templateUrl: './my-page-p.component.html',
    styleUrls: ['./my-page-p.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MyPagePComponent {
    @Input() profile!: UserProps | null;

    get age(): string {
        return Number(this.profile?.age) > 100
            ? this.lang.isEn
                ? 'Unset'
                : '未設定'
            : String(this.profile?.age);
    }

    constructor(private readonly lang: LangService) {}
}
