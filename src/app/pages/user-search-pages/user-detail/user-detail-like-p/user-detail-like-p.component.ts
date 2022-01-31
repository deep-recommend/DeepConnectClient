import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core'
import { UiService } from 'src/app/states/ui/ui.service'
import { UserProps } from 'src/app/states/user/user.model'

@Component({
    selector: 'app-user-detail-like-p',
    templateUrl: './user-detail-like-p.component.html',
    styleUrls: ['./user-detail-like-p.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UserDetailLikePComponent implements OnInit {
    @Input() user!: UserProps | null | undefined
    @Input() currentUserId!: number | null | undefined
    @Output() clickLikeButton: EventEmitter<number> = new EventEmitter<number>()
    @Output() clickUnlikeButton: EventEmitter<number> = new EventEmitter<number>()

    alreadyLiked: boolean = this.uiService.alreadyLikedByMyself(Number(this.currentUserId), Number(this.user?.id))

    constructor(
        private readonly uiService: UiService
    ) {}

    ngOnInit(): void {}

    onClickLikeButton(): void {
        this.clickLikeButton.emit(this.user?.id)
    }

    onClickUnlikeButton(): void {
        this.clickUnlikeButton.emit(this.user?.id)
    }
}
