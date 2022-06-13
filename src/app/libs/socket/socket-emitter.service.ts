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

    emitBlock(block: { userId: number; blockUserId: number }): void {
        this.socket.emit('block', block);
    }

    emitUnblock(id: number): void {
        this.socket.emit('unblock', id);
    }

    emitFilter(filter: { userId: number; filterUserId: number }): void {
        this.socket.emit('filter', filter);
    }

    emitUnfilter(id: number): void {
        this.socket.emit('unfilter', id);
    }
}
