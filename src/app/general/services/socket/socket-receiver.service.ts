import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { MessageStore } from 'src/app/states/message';
import { CustomSocket, SocketService } from './socket.config.service';

@Injectable({
    providedIn: 'root',
})
export class ReceiverService {
    constructor(private readonly socketService: SocketService, private readonly socket: CustomSocket) {}

    receiveMessage(): Observable<any> {
        return this.socketService.on('message');
    }

    getMessage() {
        return this.socket.fromEvent('message')
    }
}
