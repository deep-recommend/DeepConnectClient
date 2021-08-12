import { Injectable } from '@angular/core'
import { SocketEmitterService } from './socket-emitter.service'
import { SocketReceiverService } from './socket-receiver.service'

@Injectable({
    providedIn: 'root',
})
export class SocketService {
    constructor(
        private readonly socketEmitter: SocketEmitterService,
        private readonly socketReceiver: SocketReceiverService
    ) {}

    sendMessage(data: any): void {
        this.socketEmitter.emitMessageSending(data)
        this.socketReceiver.receiveMessage()
    }

    like(data: any): void {
        this.socketEmitter.emitLike(data)
        this.socketReceiver.receiveLike()
    }

    unlike(query: any): void {
        this.socketEmitter.emitUnlike(query)
        this.socketReceiver.receiveUnlike()
    }

    notificationIncrease(data: any): void {
        this.socketEmitter.emitNotificationIncrease(data)
        this.socketReceiver.receiveNotificationIncrease()
    }

    notificationDecrease(id: any): void {
        this.socketEmitter.emitNotificationDecrease(id)
        this.socketReceiver.receiveNotificationDecrease()
    }
}
