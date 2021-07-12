import { Component, Input, OnInit } from '@angular/core'
import { birthDayToAge } from 'src/app/general/functions/birthday-to-age'
import { UserProps } from 'src/app/states/user'

@Component({
    selector: 'app-user-detail-p',
    templateUrl: './user-detail-p.component.html',
    styleUrls: ['./user-detail-p.component.scss'],
})
export class UserDetailPComponent implements OnInit {
    @Input() user!: UserProps | null

    constructor() {}

    ngOnInit(): void {}

    birthDayToAge = birthDayToAge
}
