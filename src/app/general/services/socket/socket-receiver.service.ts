import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { MessageService } from 'src/app/states/message';
import { SocketService } from './socket.config.service';

@Injectable({
    providedIn: 'root',
})
export class SocketReceiverService {
    constructor(private readonly socketService: SocketService, private messageService: MessageService) {}

    receiveMessage(): Observable<any> {
        console.log('Receive');
        return this.socketService.on('chat message');
    }
}
