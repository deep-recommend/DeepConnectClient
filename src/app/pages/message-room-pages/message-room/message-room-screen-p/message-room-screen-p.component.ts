import { Component, Input, OnInit } from '@angular/core';
import { MessageProps } from 'src/app/states/message';
import { ProfileProps } from 'src/app/states/user';

@Component({
    selector: 'app-message-room-screen-p',
    templateUrl: './message-room-screen-p.component.html',
    styleUrls: ['./message-room-screen-p.component.scss'],
})
export class MessageRoomScreenPComponent implements OnInit {
    @Input() messages!: MessageProps[] | null;
    @Input() profile!: ProfileProps | null;

    constructor() {}

    ngOnInit(): void {}
}
