import { Component, OnDestroy, OnInit } from '@angular/core'
import { Router } from '@angular/router'
import { Observable, Subscription } from 'rxjs'
import { AuthenticationService } from 'src/app/general/services/authentication.service'
import { LikeProps, LikeQuery, LikeService } from 'src/app/states/like'
import { UiService } from 'src/app/states/ui/ui.service'
import { UserProps, UserService, UserQuery, UserStore } from 'src/app/states/user'

@Component({
    selector: 'app-matching-users-c',
    templateUrl: './matching-users-c.component.html',
    styleUrls: ['./matching-users-c.component.scss'],
})
export class MatchingUsersCComponent implements OnInit, OnDestroy {
    pageName: string | null | undefined
    matchingUsers: UserProps[] = []
    existsMatchingUsers: boolean = true

    subscriptions: Subscription[] = []

    currentUserId$: Observable<string> = this.userQuery.currentUserId$
    users$: Observable<UserProps[]> = this.userQuery.users$
    profile$: Observable<UserProps> = this.userQuery.profile$
    likes$: Observable<LikeProps[]> = this.likeQuery.likes$

    profileGetter = this.userQuery.profileGetter

    constructor(
        private readonly userService: UserService,
        private readonly userQuery: UserQuery,
        private readonly router: Router,
        private readonly authenticationService: AuthenticationService,
        private readonly likeService: LikeService,
        private readonly likeQuery: LikeQuery,
        private readonly userStore: UserStore,
        private readonly uiService: UiService
    ) {}

    ngOnInit(): void {
        this.pageName = 'メッセージ'
        this.subscriptions.push(this.userService.getUsersRequest().subscribe())
        this.subscriptions.push(this.likeService.getLikes().subscribe())
        this.subscriptions.push(this.authenticationService.getProfile().subscribe())
        this.subscriptions.push(
            this.users$.subscribe((data) => {
                this._pushOnlyMatchingUser(data)
            })
        )
    }

    ngOnDestroy(): void {
        this.subscriptions.forEach((sub) => sub.unsubscribe())
    }

    onReceivedClickUserToMessage(userId: string): void {
        this.userService.getCompanionRequest(userId).subscribe(() => {
            this.userStore.updateUserId(userId)
            this.router.navigate([`/message-room/${userId}`])
        })
    }

    private _pushOnlyMatchingUser(users: UserProps[]): void {
        users.forEach((user) => {
            if (this.uiService.isMatching(this.profileGetter._id, user._id)) {
                this.matchingUsers.push(user)
            }
        })
        this.existsMatchingUsers = this.matchingUsers.length !== 0
    }
}
