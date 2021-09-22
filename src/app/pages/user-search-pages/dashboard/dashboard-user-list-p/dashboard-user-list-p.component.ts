import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core'
import { birthDayToAge } from 'src/app/general/functions/birthday-to-age'
import { zip } from 'lodash-es'
import { UiService } from 'src/app/states/ui/ui.service'
import { LikeProps } from 'src/app/states/like/like.model'
import { UserProps } from 'src/app/states/user/user.model'
@Component({
    selector: 'app-dashboard-user-list-p',
    templateUrl: './dashboard-user-list-p.component.html',
    styleUrls: ['./dashboard-user-list-p.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DashboardUserListPComponent implements OnInit {
    @Input() profile!: UserProps | null
    @Input() currentUserId!: number | null
    @Input() users!: UserProps[] | null
    @Input() likes!: LikeProps[] | null
    @Output() clickLikeButton: EventEmitter<number> = new EventEmitter<number>()
    @Output() clickUnlikeButton: EventEmitter<number> = new EventEmitter<number>()
    @Output() clickUsersToDetails: EventEmitter<number> = new EventEmitter<number>()

    constructor(private readonly uiService: UiService) {}

    ngOnInit() {}

    zip = zip
    birthDayToAge = birthDayToAge

    onClickLikeButton(userId: number): void {
        this.clickLikeButton.emit(userId)
    }

    onClickUnlikeButton(userId: number): void {
        this.clickUnlikeButton.emit(userId)
    }

    onClickUsersToDetail(userId: number): void {
        this.clickUsersToDetails.emit(userId)
    }

    alreadyLiked(userId: number): boolean {
        return this.uiService.alreadyLikedByMyself(Number(this.currentUserId), userId)
    }
}
