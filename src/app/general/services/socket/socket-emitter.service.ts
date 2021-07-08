import { Injectable } from '@angular/core'
import { Socket } from 'ngx-socket-io'
@Injectable({
    providedIn: 'root',
})
export class SocketEmitterService {
    constructor(private readonly socket: Socket) {}

    emitAddMessage(message: any): void {
        this.socket.emit('sendMessage', message)
    }

    emitLike(like: any): void {
        this.socket.emit('like', like)
    }

    emitUnlike(unlike: any): void {
        this.socket.emit('unlike', unlike)
    }
}
