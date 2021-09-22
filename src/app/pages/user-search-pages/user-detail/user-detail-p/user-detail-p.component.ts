import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnChanges, OnInit, Output } from '@angular/core'
import { birthDayToAge } from 'src/app/general/functions/birthday-to-age'
import { UiService } from 'src/app/states/ui/ui.service'
import { UserProps } from 'src/app/states/user/user.model'

@Component({
    selector: 'app-user-detail-p',
    templateUrl: './user-detail-p.component.html',
    styleUrls: ['./user-detail-p.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UserDetailPComponent implements OnInit, OnChanges {
    @Input() user!: UserProps | null | undefined
    @Input() currentUserId!: number | null | undefined
    @Output() clickUserToMessage: EventEmitter<number> = new EventEmitter<number>()

    constructor(private readonly uiService: UiService) {}

    ngOnInit(): void {}

    ngOnChanges(): void {
        // this._setBirthdayToAge()
    }

    birthDayToAge = birthDayToAge

    onClickUserToMessage(userId: number): void {
        this.clickUserToMessage.emit(userId)
    }

    isMatching(userId: number): boolean {
        return this.uiService.isMatching(Number(this.currentUserId), userId)
    }

    // private _setBirthdayToAge(): void {
    //     this.age = this.birthDayToAge(
    //         Number(this.user?.birthYear),
    //         Number(this.user?.birthMonth),
    //         Number(this.user?.birthDay)
    //     )
    // }
}
