import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Socket } from 'ngx-socket-io';
import { map } from 'rxjs/operators';
import { SocketEmitterService } from '../general/services/socket/socket-emitter.service';
import { SocketReceiverService } from '../general/services/socket/socket-receiver.service';

@Component({
    selector: 'app-websocket',
    templateUrl: './websocket.component.html',
    styleUrls: ['./websocket.component.scss'],
})
export class WebsocketComponent implements OnInit {
    input = new FormControl('');
    connection!: { unsubscribe: () => void };
    data: any;
    messages: any = [];

    constructor(
        private emitter: SocketEmitterService,
        private receiver: SocketReceiverService,
        private socket: Socket
    ) {}

    onClick() {
        const value = this.input.value;
        console.log('value', value);
        // this.socket.emit('chat message', value);

        // this.socket.fromEvent('chat message').subscribe((data) => {
        //     console.log('data', data);
        //     this.messages.push(data);
        // });
        this.emitter.emitMessage(value);
        this.receiver.receiveMessage().subscribe((data) => {
            console.log(data);
            this.messages.push(data);
        });
        this.input.reset();
    }

    ngOnInit() {}
}
