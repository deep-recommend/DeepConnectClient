import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core'
import { LikeStatus } from 'src/app/general/classes/like-status'
import { birthDayToAge } from 'src/app/general/functions/birthday-to-age'
import { LikeProps } from 'src/app/states/like/like.model'
import { UserProps } from 'src/app/states/user/user.model'
@Component({
    selector: 'app-matching-users-p',
    templateUrl: './matching-users-p.component.html',
    styleUrls: ['./matching-users-p.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MatchingUsersPComponent implements OnInit {
    @Input() currentUserId!: number | null
    @Input() users!: UserProps[] | null
    @Input() profile!: UserProps | null
    @Input() likes!: LikeProps[] | null
    @Output() clickUserToMessage: EventEmitter<number> = new EventEmitter<number>()
    @Output() outputUsers: EventEmitter<UserProps> = new EventEmitter<UserProps>()

    constructor(private readonly likeStatus: LikeStatus) {}

    ngOnInit(): void {}

    birthDayToAge = birthDayToAge

    onClickUserToMessage(userId: number): void {
        this.clickUserToMessage.emit(userId)
    }

    isMatching(userId: number): boolean {
        return this.likeStatus.isMatching(Number(this.currentUserId), userId)
    }
}
