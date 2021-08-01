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
    @Input() user!: UserProps | null
    @Input() currentUserId!: string | null
    @Output() clickLikeButton: EventEmitter<string> = new EventEmitter<string>()
    @Output() clickUnlikeButton: EventEmitter<string> = new EventEmitter<string>()

    constructor(private readonly uiService: UiService) {}

    ngOnInit(): void {}

    ngOnChanges(): void {
        this.setBirthdayToAge()
    }

    birthDayToAge = birthDayToAge

    onClickLikeButton(userId: string): void {
        this.clickLikeButton.emit(userId)
    }

    onClickUnlikeButton(userId: string): void {
        this.clickUnlikeButton.emit(userId)
    }

    alreadyLiked(userId: string): boolean {
        return this.uiService.alreadyLikedByMyself(String(this.currentUserId), userId)
    }

    setBirthdayToAge(): void {
        this.age = this.birthDayToAge(
            Number(this.user?.birthYear),
            Number(this.user?.birthMonth),
            Number(this.user?.birthDay)
        )
    }
}
