import { Injectable } from '@angular/core';
import { Socket } from 'ngx-socket-io';
import { CreateLikeProps } from 'src/app/states/like/like.model';
@Injectable({
    providedIn: 'root',
})
export class SocketEmitterService {
    constructor(private readonly socket: Socket) {}

    emitMessageSending(message: any): void {
        this.socket.emit('sendMessage', message);
    }

    emitLike(like: CreateLikeProps): void {
        this.socket.emit('like', like);
    }

    emitUnlike(unlike: any): void {
        this.socket.emit('unlike', unlike);
    }

    emitNotificationDecrease(ids: number[]): void {
        this.socket.emit('notificationDecrease', ids);
    }
}
