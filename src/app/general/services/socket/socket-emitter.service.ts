import { Injectable } from '@angular/core';
import { data } from 'jquery';
import { SocketService } from './socket.config.service';

@Injectable({
    providedIn: 'root',
})
export class SocketEmitterService {
    constructor(private readonly socketService: SocketService) {}

    emitMessage(message: any): void {
        console.log('emit', message);
        this.socketService.emit('chat message', message);
    }
}
