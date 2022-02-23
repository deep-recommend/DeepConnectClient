import { Injectable } from '@angular/core';
import { Socket } from 'ngx-socket-io';
import { forkJoin } from 'rxjs';
import { LikeService } from 'src/app/states/like/like.service';
import { MessageService } from 'src/app/states/message/message.service';
import { NotificationService } from 'src/app/states/notification/notification.service';
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
        private readonly userQuery: UserQuery
    ) {}

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
            this.notificationService.getNotifications().subscribe();
        });
    }

    private _afterReceived(): void {
        const currentUserId = this.userQuery.currentUserId;
        const userId = this.userQuery.userIdGetter;

        forkJoin(
            this.notificationService.getNotifications(),
            this.likeService.getLikes(),
            this.likeService.alreadyLikedByMyself(currentUserId, userId),
            this.likeService.matched(currentUserId, userId)
        ).subscribe();
    }
}
