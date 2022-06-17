import { Injectable } from '@angular/core';
import { Socket } from 'ngx-socket-io';
import { forkJoin } from 'rxjs';
import { LikeService } from 'src/app/states/like/like.service';
import { MessageService } from 'src/app/states/message/message.service';
import { NotificationService } from 'src/app/states/notification/notification.service';
import {
    currentUserIdKey,
    otherUserIdKey,
} from '../../general/utilities/local-strage';
import { BlockService } from '../../states/block';
import { FilterService } from '../../states/filter';
import { UserQuery } from '../../states/user/user.query';

@Injectable({
    providedIn: 'root',
})
export class SocketReceiverService {
    constructor(
        private readonly socket: Socket,
        private readonly messageService: MessageService,
        private readonly likeService: LikeService,
        private readonly notificationService: NotificationService,
        private readonly userQuery: UserQuery,
        private readonly filterService: FilterService,
        private readonly blockService: BlockService
    ) {}

    receiveJoinRooms(): void {
        this.socket.fromEvent('joinedRooms').subscribe(() => {});
    }

    receiveMessage(): void {
        this.socket.fromEvent('message').subscribe(() => {
            this.messageService.getMessagesRequest().subscribe();
        });
    }

    receiveLike(): void {
        this.socket.fromEvent('liked').subscribe(() => {
            this._afterReceived();
        });
    }

    receiveUnlike(): void {
        this.socket.fromEvent('unliked').subscribe(() => {
            this._afterReceived();
        });
    }

    receiveNotificationDecrease(): void {
        this.socket.fromEvent('notificationDecrease').subscribe(() => {
            this._afterReceived();
        });
    }

    receiveBlock(): void {
        this.socket.fromEvent('blocked').subscribe(() => {
            this._getBlocks();
        });
    }

    receiveUnblock(): void {
        this.socket.fromEvent('unblocked').subscribe(() => {
            this._getBlocks();
        });
    }

    receiveFilter(): void {
        this.socket.fromEvent('filtered').subscribe(() => {
            this._getFilters();
        });
    }

    receiveUnfilter(): void {
        this.socket.fromEvent('unfiltered').subscribe(() => {
            this._getFilters();
        });
    }

    private _afterReceived(): void {
        const currentUserId = this.userQuery.currentUserId
            ? this.userQuery.currentUserId
            : localStorage.getItem(currentUserIdKey);
        const userId = this.userQuery.userIdGetter
            ? this.userQuery.userIdGetter
            : localStorage.getItem(otherUserIdKey);

        forkJoin(
            this.notificationService.getNotifications(),
            this.likeService.getLikes(),
            this.likeService.alreadyLikedByMyself(currentUserId, userId),
            this.likeService.alreadyLikedByOthers(currentUserId, userId),
            this.likeService.matched(currentUserId, userId)
        ).subscribe();
    }

    private _getBlocks(): void {
        this.blockService.getBlocks().subscribe();
    }

    private _getFilters(): void {
        this.filterService.getFilters().subscribe();
    }
}
