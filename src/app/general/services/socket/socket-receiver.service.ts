import { Injectable } from '@angular/core';
import { Socket } from 'ngx-socket-io';
import { mergeMap } from 'rxjs/operators';
import { MessageService } from 'src/app/states/message';

@Injectable({
    providedIn: 'root',
})
export class SocketReceiverService {
    constructor(private readonly socket: Socket, private readonly messageService: MessageService) {}

    receiveAddMessage(): void {
        this.socket
            .fromEvent('pushMessage')
            .pipe(mergeMap(() => this.messageService.getMessagesRequest()))
            .subscribe(() => {
                this.messageService.getMessagesRequest().subscribe();
            });
    }
}
