import { Component, OnDestroy, OnInit } from '@angular/core'
import { Router } from '@angular/router'
import { Observable, Subscription } from 'rxjs'
import { AuthenticationService } from 'src/app/general/services/authentication.service'
import { SocketService } from 'src/app/general/services/socket/socket.service'
import { userIdKey } from 'src/app/general/utilities/local-strage'
import { LikeService } from 'src/app/states/like'
import { UserProps, UserQuery, UserService } from 'src/app/states/user'

@Component({
    selector: 'app-user-detail-c',
    templateUrl: './user-detail-c.component.html',
    styleUrls: ['./user-detail-c.component.scss'],
})
export class UserDetailCComponent implements OnInit, OnDestroy {
    pageName!: string | null | undefined
    subscriptions: Subscription[] = []

    profile: UserProps = this.userQuery.profileGetter
    detailUser: UserProps = this.userQuery.detailUserGetter
    detailUser$: Observable<UserProps | null | undefined> = this.userQuery.detailUser$
    currentUserId$: Observable<string | null | undefined> = this.userQuery.currentUserId$

    constructor(
        private readonly userService: UserService,
        private readonly userQuery: UserQuery,
        private readonly socket: SocketService,
        private readonly router: Router,
        private readonly likeService: LikeService,
        private readonly authenticationService: AuthenticationService
    ) {}

    ngOnInit(): void {
        this.subscriptions.push(this.userService.getUsersRequest().subscribe())
        this.subscriptions.push(this.likeService.getLikes().subscribe())
        this.subscriptions.push(this.authenticationService.getProfile().subscribe())
        this.getUserDetail()
    }

    ngOnDestroy(): void {
        this.subscriptions.forEach((sub) => sub.unsubscribe())
    }

    getUserDetail(): void {
        const userId = this.userQuery.userIdGetter
        if (userId) {
            this.subscriptions.push(this.userService.getOnlyUserRequest(userId).subscribe())
        } else {
            this.subscriptions.push(
                this.userService.getOnlyUserRequest(String(localStorage.getItem(userIdKey))).subscribe()
            )
        }
    }

    onReceivedClickLikeButton(userId: string): void {
        console.log('like to ' + '& ' + 'notification increase ' + userId)
        this._setLike(userId)
        this._setNotificationIncrease(userId)
    }

    onReceivedClickUnlikeButton(userId: string): void {
        this._setUnlike(userId)
    }

    onReceivedClickUserToMessage(userId: string): void {
        this.router.navigate([`/message-room/${userId}`])
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
            isMessage: false,
            currentUserId: this.profile._id,
            userId: userId,
        }
        this.socket.notificationIncrease(value)
    }
}
