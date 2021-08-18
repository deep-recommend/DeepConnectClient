import { Component, OnInit, Output, EventEmitter } from '@angular/core'

@Component({
    selector: 'app-message-room-scroll-to-bottom-button-p',
    templateUrl: './message-room-scroll-to-bottom-button-p.component.html',
    styleUrls: ['./message-room-scroll-to-bottom-button-p.component.scss'],
})
export class MessageRoomScrollToBottomButtonPComponent implements OnInit {
    @Output() clickScrollToBottom: EventEmitter<void> = new EventEmitter<void>()
    constructor() {}

    ngOnInit(): void {}

    onClickScrollToBottom(): void {
        this.clickScrollToBottom.emit()
    }
}
