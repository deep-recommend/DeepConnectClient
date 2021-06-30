import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MessageProps } from 'src/app/states/message';

@Component({
    selector: 'app-message-room-message-sender-p',
    templateUrl: './message-room-message-sender-p.component.html',
    styleUrls: ['./message-room-message-sender-p.component.scss'],
})
export class MessageRoomMessageSenderPComponent implements OnInit {
    message = new FormControl('');

    @Output() sendMessage: EventEmitter<string> = new EventEmitter<string>();

    constructor() {}

    ngOnInit(): void {}

    onSendMessage(event?: any): void {
        if ((event.keyCode === 13 && event.shiftKey) || event.type === 'click') {
            console.log(this.message.value);
            this.sendMessage.emit(this.message.value);
            this.message.reset();
        }
        return;
    }
}
