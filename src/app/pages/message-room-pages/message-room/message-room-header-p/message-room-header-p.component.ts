import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { UserProps } from 'src/app/states/user';

@Component({
    selector: 'app-message-room-header-p',
    templateUrl: './message-room-header-p.component.html',
    styleUrls: ['./message-room-header-p.component.scss'],
})
export class MessageRoomHeaderPComponent implements OnInit {
    @Input() companion!: UserProps | null;
    @Output() clickAccount: EventEmitter<string | undefined> = new EventEmitter<string | undefined>();

    constructor() {}

    ngOnInit(): void {}

    onClickAccount(userId: string | undefined): void {
        this.clickAccount.emit(userId);
    }
}
