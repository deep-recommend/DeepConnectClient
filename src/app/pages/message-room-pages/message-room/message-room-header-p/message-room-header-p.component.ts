import { Component, Input, OnInit } from '@angular/core';
import { UserProps } from 'src/app/states/user';

@Component({
    selector: 'app-message-room-header-p',
    templateUrl: './message-room-header-p.component.html',
    styleUrls: ['./message-room-header-p.component.scss'],
})
export class MessageRoomHeaderPComponent implements OnInit {
    @Input() companion!: UserProps | null;

    constructor() {}

    ngOnInit(): void {}
}
