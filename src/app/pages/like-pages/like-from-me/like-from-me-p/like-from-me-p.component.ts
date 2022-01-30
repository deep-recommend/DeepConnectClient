import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core'
import { Observable } from 'rxjs'
import { birthDayToAge } from 'src/app/general/functions/birthday-to-age'
import { LikeProps } from 'src/app/states/like/like.model'
import { UiService } from 'src/app/states/ui/ui.service'
import { UserProps } from 'src/app/states/user/user.model'

@Component({
    selector: 'app-like-from-me-p',
    templateUrl: './like-from-me-p.component.html',
    styleUrls: ['./like-from-me-p.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LikeFromMePComponent {
    @Input() currentUserId!: number | null
    @Input() users!: UserProps[] | null
    @Input() profile!: UserProps | null
    @Input() likes!: LikeProps[] | null
    @Output() clickUserToMessage: EventEmitter<number> = new EventEmitter<number>()

    // alreadyLiked: Observable<boolean> = this.uiService.alreadyLikedByMyself(Number(this.currentUserId), userId);

    constructor(private readonly uiService: UiService) {}

    birthDayToAge = birthDayToAge

    onClickUserToMessage(userId: number): void {
        this.clickUserToMessage.emit(userId)
    }

    // alreadyLiked(userId: number): boolean {
    //     return this.uiService.alreadyLikedByMyself(Number(this.currentUserId), userId)
    // }
}
