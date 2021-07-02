import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { trim } from 'lodash';
import { io } from 'socket.io-client';
@Component({
    selector: 'app-message-room-message-sender-p',
    templateUrl: './message-room-message-sender-p.component.html',
    styleUrls: ['./message-room-message-sender-p.component.scss'],
})
export class MessageRoomMessageSenderPComponent implements OnInit {
    message = new FormControl('', [Validators.required]);

    @Output() sendMessage: EventEmitter<string> = new EventEmitter<string>();

    constructor() {}

    ngOnInit(): void {}

    onSendMessage(event?: any): void {
        if (trim(this.message.value) === '') {
            return;
        }
        if ((event.keyCode === 13 && event.shiftKey) || event.type === 'click') {
            this.sendMessage.emit(this.message.value);
            this.message.reset();
        }
        return;
    }
}
