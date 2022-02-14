import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { SocketService } from 'src/app/libs/socket/socket.service';
import { LikeProps } from 'src/app/states/like/like.model';
import { LikeQuery } from 'src/app/states/like/like.query';
import { UserProps } from 'src/app/states/user/user.model';
import { UserQuery } from 'src/app/states/user/user.query';
import { UserStore } from 'src/app/states/user/user.store';

@Component({
    selector: 'app-dashboard-c',
    templateUrl: './dashboard-c.component.html',
    styleUrls: ['./dashboard-c.component.scss'],
})
export class DashboardCComponent {
    profile: UserProps = this.userQuery.profileGetter;

    profile$: Observable<UserProps> = this.userQuery.profile$;
    currentUserId$: Observable<number> = this.userQuery.currentUserId$;
    users$: Observable<UserProps[]> = this.userQuery.users$;
    likes$: Observable<LikeProps[]> = this.likeQuery.likes$;

    constructor(
        private readonly userQuery: UserQuery,
        private readonly router: Router,
        private readonly likeQuery: LikeQuery,
        private readonly socket: SocketService,
        private readonly userStore: UserStore
    ) {}

    onReceivedClickSearchField(): void {
        this.router.navigate(['/search']);
    }

    onReceivedClickLikeButton(userId: number): void {
        this._setLike(userId);
        this._setNotificationIncrease(userId);
    }

    onReceivedClickUnlikeButton(userId: number): void {
        this._setUnlike(userId);
    }

    onReceivedClickUsersToDetail(userId: number): void {
        this.userStore.updateUserId(userId);
        this.router.navigate([`user-detail/${userId}`]);
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
            currentUserId: this.profile.id,
            userId: userId,
        };
        this.socket.notificationIncrease(value);
    }
}
