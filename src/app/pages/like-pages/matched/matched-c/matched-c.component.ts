import { Component, OnDestroy, OnInit } from '@angular/core'
import { Router } from '@angular/router'
import { Observable, Subscription } from 'rxjs'
import { AuthenticationService } from 'src/app/general/services/authentication.service'
import { LikeProps, LikeService, LikeQuery } from 'src/app/states/like'
import { UserProps, UserService, UserQuery, UserStore } from 'src/app/states/user'

@Component({
    selector: 'app-matched-c',
    templateUrl: './matched-c.component.html',
    styleUrls: ['./matched-c.component.scss'],
})
export class MatchedCComponent implements OnInit, OnDestroy {
    subscriptions: Subscription[] = []

    currentUserId$: Observable<string> = this.userQuery.currentUserId$
    users$: Observable<UserProps[]> = this.userQuery.users$
    profile$: Observable<UserProps> = this.userQuery.profile$
    likes$: Observable<LikeProps[]> = this.likeQuery.likes$

    constructor(
        private readonly userService: UserService,
        private readonly userQuery: UserQuery,
        private readonly router: Router,
        private readonly authenticationService: AuthenticationService,
        private readonly likeService: LikeService,
        private readonly likeQuery: LikeQuery,
        private readonly userStore: UserStore
    ) {}

    ngOnInit(): void {
        this.subscriptions.push(this.userService.getUsersRequest().subscribe())
        this.subscriptions.push(this.likeService.getLikes().subscribe())
        this.subscriptions.push(this.authenticationService.getProfile().subscribe())
    }

    ngOnDestroy(): void {
        this.subscriptions.forEach((sub) => sub.unsubscribe())
    }

    onReceivedClickUserToMessage(userId: string): void {
        this.userService.getCompanionRequest(userId).subscribe(() => {
            this.userStore.updateUserId(userId)
            this.router.navigate([`/user-detail/${userId}`])
        })
    }
}
