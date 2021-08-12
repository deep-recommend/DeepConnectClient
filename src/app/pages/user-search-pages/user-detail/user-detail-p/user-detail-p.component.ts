import { Component, EventEmitter, Input, OnChanges, OnInit, Output } from '@angular/core'
import { birthDayToAge } from 'src/app/general/functions/birthday-to-age'
import { UiService } from 'src/app/states/ui/ui.service'
import { UserProps } from 'src/app/states/user'

@Component({
    selector: 'app-user-detail-p',
    templateUrl: './user-detail-p.component.html',
    styleUrls: ['./user-detail-p.component.scss'],
})
export class UserDetailPComponent implements OnInit, OnChanges {
    age!: number
    @Input() user!: UserProps | null | undefined
    @Input() currentUserId!: string | null | undefined
    @Output() clickUserToMessage: EventEmitter<string> = new EventEmitter<string>()

    constructor(private readonly uiService: UiService) {}

    ngOnInit(): void {}

    ngOnChanges(): void {
        this._setBirthdayToAge()
    }

    birthDayToAge = birthDayToAge

    onClickUserToMessage(userId: string): void {
        this.clickUserToMessage.emit(userId)
    }

    isMatching(userId: string): boolean {
        return this.uiService.isMatching(String(this.currentUserId), userId)
    }

    private _setBirthdayToAge(): void {
        this.age = this.birthDayToAge(
            Number(this.user?.birthYear),
            Number(this.user?.birthMonth),
            Number(this.user?.birthDay)
        )
    }
}
