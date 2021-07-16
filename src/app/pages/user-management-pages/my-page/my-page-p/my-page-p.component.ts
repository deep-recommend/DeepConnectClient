import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core'
import { birthDayToAge } from 'src/app/general/functions/birthday-to-age'
import { UserProps } from 'src/app/states/user'

@Component({
    selector: 'app-my-page-p',
    templateUrl: './my-page-p.component.html',
    styleUrls: ['./my-page-p.component.scss'],
})
export class MyPagePComponent implements OnInit {
    @Input() profile!: UserProps | null
    @Output() clickToProfileSetting: EventEmitter<void> = new EventEmitter<void>()
    @Output() clickSignOut: EventEmitter<void> = new EventEmitter()

    constructor() {}

    ngOnInit(): void {}

    birthDayToAge = birthDayToAge

    onClickToProfileSetting(): void {
        this.clickToProfileSetting.emit()
    }

    signOut(): void {
        this.clickSignOut.emit()
    }
}
