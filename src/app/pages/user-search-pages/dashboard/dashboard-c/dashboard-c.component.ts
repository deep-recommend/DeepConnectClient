import { Component, OnDestroy, OnInit } from '@angular/core'
import { Router } from '@angular/router'
import { Observable, Subscription } from 'rxjs'
import { AuthenticationService } from 'src/app/general/services/authentication.service'
import { SocketService } from 'src/app/general/services/socket/socket.service'
import { LikeProps, LikeQuery, LikeService } from 'src/app/states/like'
import { UserProps, UserQuery, UserService, UserStore } from 'src/app/states/user'

@Component({
    selector: 'app-dashboard-c',
    templateUrl: './dashboard-c.component.html',
    styleUrls: ['./dashboard-c.component.scss'],
})
export class DashboardCComponent implements OnInit, OnDestroy {
    pageName: string | null | undefined

    subscriptions: Subscription[] = []

    profile: UserProps = this.userQuery.profileGetter

    profile$: Observable<UserProps> = this.userQuery.profile$
    currentUserId$: Observable<string> = this.userQuery.currentUserId$
    users$: Observable<UserProps[]> = this.userQuery.users$
    likes$: Observable<LikeProps[]> = this.likeQuery.likes$

    constructor(
        private readonly userService: UserService,
        private readonly userQuery: UserQuery,
        private readonly router: Router,
        private readonly likeService: LikeService,
        private readonly likeQuery: LikeQuery,
        private readonly socket: SocketService,
        private readonly authenticationService: AuthenticationService,
        private readonly userStore: UserStore
    ) {}

    ngOnInit(): void {
        this.pageName = 'CmCn'
        this.subscriptions.push(this.userService.getUsersRequest().subscribe())
        this.subscriptions.push(this.likeService.getLikes().subscribe())
        this.subscriptions.push(this.authenticationService.getProfile().subscribe())
    }

    ngOnDestroy(): void {
        this.subscriptions.forEach((sub) => sub.unsubscribe())
    }

    onReceivedClickSearchField(): void {
        this.router.navigate(['/search'])
    }

    onReceivedClickLikeButton(userId: string): void {
        console.log('like to ' + '& ' + 'notification increase ' + userId)
        this._setLike(userId)
        this._setNotificationIncrease(userId)
    }

    onReceivedClickUnlikeButton(userId: string): void {
        console.log('unlike to ' + userId)
        this._setUnlike(userId)
    }

    onReceivedClickUsersToDetail(userId: string): void {
        this.userStore.updateUserId(userId)
        this.router.navigate([`user-detail/${userId}`])
    }

    private _setLike(userId: string): void {
        const value = {
            currentUserId: this.profile._id,
            userId: userId,
        }
        this.socket.like(value)
    }

    private _setUnlike(userId: string): void {
        const query = {
            currentUserId: this.profile._id,
            userId: userId,
        }
        this.socket.unlike(query)
    }

    private _setNotificationIncrease(userId: string): void {
        const value = {
            currentUserId: this.profile._id,
            userId: userId,
        }
        this.socket.notificationIncrease(value)
    }
}
