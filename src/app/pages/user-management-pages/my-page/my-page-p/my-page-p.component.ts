import { ChangeDetectionStrategy, Component, Input,  OnInit } from '@angular/core'
import { UserProps } from 'src/app/states/user/user.model'

@Component({
    selector: 'app-my-page-p',
    templateUrl: './my-page-p.component.html',
    styleUrls: ['./my-page-p.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MyPagePComponent implements OnInit {
    @Input() profile!: UserProps | null

    constructor() {}

    ngOnInit(): void {}
}
