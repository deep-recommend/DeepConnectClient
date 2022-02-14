import { Injectable } from '@angular/core';
import { Socket } from 'ngx-socket-io';
import { LikeService } from 'src/app/states/like/like.service';
import { MessageService } from 'src/app/states/message/message.service';
import { NotificationService } from 'src/app/states/notification/notification.service';

@Injectable({
    providedIn: 'root',
})
export class SocketReceiverService {
    constructor(
        private readonly socket: Socket,
        private readonly messageService: MessageService,
        private readonly likeService: LikeService,
        private readonly notificationService: NotificationService
    ) {}

    receiveMessage(): void {
        this.socket.fromEvent('message').subscribe(() => {
            this.messageService.getMessagesRequest().subscribe();
        });
    }

    receiveLike(): void {
        this.socket.fromEvent('liked').subscribe(() => {
            this.likeService.getLikes().subscribe();
        });
    }

    receiveUnlike(): void {
        this.socket.fromEvent('unliked').subscribe(() => {
            this.likeService.getLikes().subscribe();
        });
    }

    receiveNotificationIncrease(): void {
        this.socket.fromEvent('notificationIncrease').subscribe(() => {
            this.notificationService.getNotifications().subscribe();
        });
    }

    receiveNotificationDecrease(): void {
        this.socket.fromEvent('notificationDecrease').subscribe(() => {
            this.notificationService.getNotifications().subscribe();
        });
    }
}
