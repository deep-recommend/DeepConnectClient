import { UserStore } from 'src/app/states/user/user.store';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { SocketService } from 'src/app/libs/socket/socket.service';
import { UserProps } from 'src/app/states/user/user.model';
import { UserQuery } from 'src/app/states/user/user.query';
import { LikeQuery } from '../../../../states/like/like.query';
import { RoomProps } from '../../../../states/room/room.model';
import { RoomQuery } from '../../../../states/room/room.query';
import { RoomStore } from '../../../../states/room/room.store';
import { Menu } from '../../../../general/interfaces/menu.interface';

@Component({
    selector: 'app-user-detail-c',
    templateUrl: './user-detail-c.component.html',
    styleUrls: ['./user-detail-c.component.scss'],
})
export class UserDetailCComponent {
    profile: UserProps = this.userQuery.profileGetter;
    detailUser: UserProps = this.userQuery.detailUserGetter;
    menus: Menu[] = [
        {
            icon: 'person_off',
            description: '表示しない',
            clickCallBack: () => {},
        },
        {
            icon: 'block',
            description: 'ブロックする',
            clickCallBack: () => {},
        },
    ];

    detailUser$: Observable<UserProps> = this.userQuery.detailUser$;
    currentUserId$: Observable<number> = this.userQuery.currentUserId$;
    alreadyLikedByMySelf$: Observable<boolean> =
        this.likeQuery.alreadyLikedByMyself$;
    matched$: Observable<boolean> = this.likeQuery.matched$;

    constructor(
        private readonly userQuery: UserQuery,
        private readonly likeQuery: LikeQuery,
        private readonly socket: SocketService,
        private readonly router: Router,
        private readonly roomQuery: RoomQuery,
        private readonly roomStore: RoomStore,
        private readonly userStore: UserStore
    ) {}

    onReceivedClickLikeButton(): void {
        this._setLike(this.detailUser.id);
    }

    onReceivedClickUnlikeButton(): void {
        this._setUnlike(this.detailUser.id);
    }

    onReceivedClickUserToMessage(): void {
        const room = this.roomQuery.getByUserId(
            this.profile.id,
            this.detailUser.id
        );
        this.roomStore.updateCurrentRoom(room as RoomProps);
        this.router.navigate([`/message-room/${room?.id}`]);
    }

    onReceivedClickNextButton(): void {
        const nextUserId = this.userQuery.nextUserId(this.detailUser.id);

        if (!nextUserId) {
            this.router.navigate(['/']);
            return;
        }

        this.userStore.updateUserId(nextUserId);
        this.router.navigate([`user-detail/${nextUserId}`]);
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
