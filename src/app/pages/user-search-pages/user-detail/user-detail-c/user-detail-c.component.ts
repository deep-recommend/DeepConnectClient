import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { SocketService } from 'src/app/libs/socket/socket.service';
import { UserProps } from 'src/app/states/user/user.model';
import { UserQuery } from 'src/app/states/user/user.query';
import { LikeQuery } from '../../../../states/like/like.query';

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
    alreadyLikedByMySelf$: Observable<boolean> =
        this.likeQuery.alreadyLikedByMyself$;
    matched$: Observable<boolean> = this.likeQuery.matched$;

    constructor(
        private readonly userQuery: UserQuery,
        private readonly likeQuery: LikeQuery,
        private readonly socket: SocketService,
        private readonly router: Router
    ) {}

    onReceivedClickLikeButton(): void {
        this._setLike(this.detailUser.id);
    }

    onReceivedClickUnlikeButton(): void {
        this._setUnlike(this.detailUser.id);
    }

    onReceivedClickUserToMessage(): void {
        this.router.navigate([`/message-room/${this.detailUser.id}`]);
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
}
