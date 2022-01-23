import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core'
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

    constructor() {}

    ngOnInit(): void {}

    onReceivedClickUserToMessage(userId: number): void {
        this.clickUserToMessage.emit(userId)
    }
}
