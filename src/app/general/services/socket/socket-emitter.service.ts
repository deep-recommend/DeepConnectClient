import { Injectable } from '@angular/core';
import { CreateMessageProps } from 'src/app/states/message';
import { CustomSocket, SocketService } from './socket.config.service';

@Injectable({
    providedIn: 'root',
})
export class EmitterService {
    constructor(private readonly socketService: SocketService, private readonly socket: CustomSocket) {}

    emitMessage(message: any): void {
        this.socketService.emit('message', message);
    }

    sendMessage(message: any): void {
        this.socket.emit('message', message)
    }
}
