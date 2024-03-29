import { Component, EventEmitter, Output } from '@angular/core';
import { UntypedFormControl, Validators } from '@angular/forms';
import { trim } from 'lodash';

@Component({
    selector: 'app-message-room-message-sender-p',
    templateUrl: './message-room-message-sender-p.component.html',
    styleUrls: ['./message-room-message-sender-p.component.scss'],
})
export class MessageRoomMessageSenderPComponent {
    message = new UntypedFormControl('', [Validators.required]);

    @Output() sendMessage: EventEmitter<string> = new EventEmitter<string>();

    onSendMessage(event?: any): void {
        if (trim(this.message.value) === '') {
            return;
        }

        if (event.keyCode === 13 || event.shiftKey || event.type === 'click') {
            this.sendMessage.emit(this.message.value);
            this.message.reset();
        }
    }
}
