import { Component, Input, OnInit } from '@angular/core'
import { birthDayToAge } from 'src/app/general/functions/birthday-to-age'
import { UserProps } from 'src/app/states/user'

@Component({
    selector: 'app-my-page-p',
    templateUrl: './my-page-p.component.html',
    styleUrls: ['./my-page-p.component.scss'],
})
export class MyPagePComponent implements OnInit {
    age!: number
    @Input() profile!: UserProps | null

    constructor() {}

    ngOnInit(): void {
        this.setBirthdayToAge()
    }

    birthDayToAge = birthDayToAge

    setBirthdayToAge(): void {
        this.age = this.birthDayToAge(
            Number(this.profile?.birthYear),
            Number(this.profile?.birthMonth),
            Number(this.profile?.birthDay)
        )
    }
}
