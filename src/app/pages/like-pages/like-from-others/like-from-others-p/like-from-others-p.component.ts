import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core'
import { LikeProps } from 'src/app/states/like/like.model'
import { UserProps } from 'src/app/states/user/user.model'

@Component({
    selector: 'app-like-from-others-p',
    templateUrl: './like-from-others-p.component.html',
    styleUrls: ['./like-from-others-p.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LikeFromOthersPComponent implements OnInit {
    @Input() currentUserId!: number | null
    @Input() users!: UserProps[] | null
    @Input() profile!: UserProps | null
    @Input() likes!: LikeProps[] | null
    @Output() clickUserToMessage: EventEmitter<number> = new EventEmitter<number>()

    constructor() {}

    ngOnInit(): void {}

    onReceivedClickUserToMessage(userId: number): void {
        this.clickUserToMessage.emit(userId)
    }
}
