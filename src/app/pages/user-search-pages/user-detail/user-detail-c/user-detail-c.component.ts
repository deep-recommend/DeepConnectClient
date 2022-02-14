import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { SocketService } from 'src/app/libs/socket/socket.service';
import { UserProps } from 'src/app/states/user/user.model';
import { UserQuery } from 'src/app/states/user/user.query';

@Component({
    selector: 'app-user-detail-c',
    templateUrl: './user-detail-c.component.html',
    styleUrls: ['./user-detail-c.component.scss'],
})
export class UserDetailCComponent {
    profile: UserProps = this.userQuery.profileGetter;
    detailUser: UserProps = this.userQuery.detailUserGetter;
    detailUser$: Observable<UserProps> = this.userQuery.detailUser$;
    currentUserId$: Observable<number> = this.userQuery.currentUserId$;

    constructor(
        private readonly userQuery: UserQuery,
        private readonly socket: SocketService,
        private readonly router: Router
    ) {}

    onReceivedClickLikeButton(userId: number): void {
        this._setLike(userId);
        this._setNotificationIncrease(userId);
    }

    onReceivedClickUnlikeButton(userId: number): void {
        this._setUnlike(userId);
    }

    onReceivedClickUserToMessage(userId: number): void {
        this.router.navigate([`/message-room/${userId}`]);
    }

    private _setLike(userId: number): void {
        const value = {
            currentUserId: this.profile.id,
            userId: userId,
        };
        this.socket.like(value);
    }

    private _setUnlike(userId: number): void {
        const query = {
            currentUserId: this.profile.id,
            userId: userId,
        };
        this.socket.unlike(query);
    }

    private _setNotificationIncrease(userId: number): void {
        const value = {
            isMessage: false,
            currentUserId: this.profile.id,
            userId: userId,
        };
        this.socket.notificationIncrease(value);
    }
}
