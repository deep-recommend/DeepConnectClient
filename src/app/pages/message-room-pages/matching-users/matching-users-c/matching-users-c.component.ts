import { Component } from '@angular/core'
import { Router } from '@angular/router'
import { Observable } from 'rxjs'
import { ProgressSpinnerService } from 'src/app/general/components/progress-spinner/progress-spinner.service'
import { LikeProps } from 'src/app/states/like/like.model'
import { LikeQuery } from 'src/app/states/like/like.query'
import { UserProps } from 'src/app/states/user/user.model'
import { UserQuery } from 'src/app/states/user/user.query'
import { UserService } from 'src/app/states/user/user.service'
import { UserStore } from 'src/app/states/user/user.store'

@Component({
    selector: 'app-matching-users-c',
    templateUrl: './matching-users-c.component.html',
    styleUrls: ['./matching-users-c.component.scss'],
})
export class MatchingUsersCComponent {
    existsMatchingUsers$: Observable<boolean> = this.userQuery.existsMatchingUsers$

    currentUserId$: Observable<number> = this.userQuery.currentUserId$
    users$: Observable<UserProps[]> = this.userQuery.users$
    profile$: Observable<UserProps> = this.userQuery.profile$
    likes$: Observable<LikeProps[]> = this.likeQuery.likes$

    profileGetter = this.userQuery.profileGetter

    constructor(
        private readonly userService: UserService,
        private readonly userQuery: UserQuery,
        private readonly router: Router,
        private readonly likeQuery: LikeQuery,
        private readonly userStore: UserStore,
        private readonly spinner: ProgressSpinnerService
    ) {}

    onReceivedClickUserToMessage(userId: number): void {
        this.spinner.open()

        this.userService.getCompanionRequest(userId).subscribe(() => {
            this.userStore.updateUserId(userId)
            this.router.navigate([`/message-room/${userId}`])
        })
    }
}
