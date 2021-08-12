import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core'
import { UiService } from 'src/app/states/ui/ui.service'
import { UserProps } from 'src/app/states/user'

@Component({
    selector: 'app-user-detail-like-p',
    templateUrl: './user-detail-like-p.component.html',
    styleUrls: ['./user-detail-like-p.component.scss'],
})
export class UserDetailLikePComponent implements OnInit {
    @Input() user!: UserProps | null | undefined
    @Input() currentUserId!: string | null | undefined
    @Output() clickLikeButton: EventEmitter<string> = new EventEmitter<string>()
    @Output() clickUnlikeButton: EventEmitter<string> = new EventEmitter<string>()

    constructor(private readonly uiService: UiService) {}

    ngOnInit(): void {}

    onClickLikeButton(userId: string): void {
        this.clickLikeButton.emit(userId)
    }

    onClickUnlikeButton(userId: string): void {
        this.clickUnlikeButton.emit(userId)
    }

    alreadyLiked(userId: string): boolean {
        return this.uiService.alreadyLikedByMyself(String(this.currentUserId), userId)
    }
}
