import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-message-room-message-sender-p',
    templateUrl: './message-room-message-sender-p.component.html',
    styleUrls: ['./message-room-message-sender-p.component.scss'],
})
export class MessageRoomMessageSenderPComponent implements OnInit {
    constructor() {}

    ngOnInit(): void {}

    sendMessage(event?: any): void {
        if ((event.keyCode === 13 && event.shiftKey) || event.type === 'click') {
        }
        return;
    }
}
