import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core'
import { birthDayToAge } from 'src/app/general/functions/birthday-to-age'
import { CreateLikeProps, LikeProps } from 'src/app/states/like'
import { ProfileProps, UserProps, UserQuery } from 'src/app/states/user'
import { values, zip } from 'lodash-es'
import { UiService } from 'src/app/states/ui/ui.service'
@Component({
    selector: 'app-dashboard-user-list-p',
    templateUrl: './dashboard-user-list-p.component.html',
    styleUrls: ['./dashboard-user-list-p.component.scss'],
})
export class DashboardUserListPComponent implements OnInit {
    @Input() profile!: ProfileProps | null
    @Input() currentUserId!: string | null
    @Input() users: UserProps[] | null = []
    @Input() likes: LikeProps[] | null = []
    @Output() clickLikeButton: EventEmitter<string> = new EventEmitter<string>()
    @Output() clickUnlikeButton: EventEmitter<string> = new EventEmitter<string>()
    @Output() clickUsersToDetails: EventEmitter<string> = new EventEmitter<string>()

    constructor(private readonly uiService: UiService) {}

    ngOnInit() {}

    zip = zip
    birthDayToAge = birthDayToAge

    onClickLikeButton(userId: string): void {
        this.clickLikeButton.emit(userId)
    }

    onClickUnlikeButton(userId: string): void {
        this.clickUnlikeButton.emit(userId)
    }

    onClickUsersToDetail(userId: string): void {
        this.clickUsersToDetails.emit(userId)
    }

    alreadyLiked(userId: string): boolean {
        return this.uiService.alreadyLiked(String(this.currentUserId), userId)
    }
}
