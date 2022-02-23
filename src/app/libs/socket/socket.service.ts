import { Injectable } from '@angular/core';
import { CreateLikeProps } from 'src/app/states/like/like.model';
import { SocketEmitterService } from './socket-emitter.service';
import { SocketReceiverService } from './socket-receiver.service';

@Injectable({
    providedIn: 'root',
})
export class SocketService {
    constructor(
        private readonly socketEmitter: SocketEmitterService,
        private readonly socketReceiver: SocketReceiverService
    ) {
        this._connect();
    }

    sendMessage(data: any): void {
        this.socketEmitter.emitMessageSending(data);
    }

    like(data: CreateLikeProps): void {
        this.socketEmitter.emitLike(data);
    }

    unlike(query: any): void {
        this.socketEmitter.emitUnlike(query);
    }

    notificationDecrease(ids: number[]): void {
        this.socketEmitter.emitNotificationDecrease(ids);
    }

    private _connect(): void {
        this.socketReceiver.receiveMessage();
        this.socketReceiver.receiveLike();
        this.socketReceiver.receiveUnlike();
        this.socketReceiver.receiveNotificationDecrease();
    }
}
