import { Component, Input, OnInit } from '@angular/core';
import { relativeTime } from 'src/app/general/functions/moment';
import { MessageProps } from 'src/app/states/message';
import { ProfileProps, UserProps } from 'src/app/states/user';
@Component({
    selector: 'app-message-room-screen-p',
    templateUrl: './message-room-screen-p.component.html',
    styleUrls: ['./message-room-screen-p.component.scss'],
})
export class MessageRoomScreenPComponent implements OnInit {
    @Input() currentRoomId!: string | null;
    @Input() messages!: MessageProps[] | null;
    @Input() profile!: ProfileProps | null;
    @Input() companion!: UserProps | null;

    constructor() {}

    ngOnInit(): void {}

    relativeTime = relativeTime;
}
