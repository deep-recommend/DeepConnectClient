import { Component, OnInit } from '@angular/core';
import { UserQuery } from 'src/app/states/user';

@Component({
    selector: 'app-message-room-c',
    templateUrl: './message-room-c.component.html',
    styleUrls: ['./message-room-c.component.scss'],
})
export class MessageRoomCComponent implements OnInit {
    companion$ = this.userQuery.companion$;

    constructor(private readonly userQuery: UserQuery) {}

    ngOnInit(): void {}

    getRoomByEntry(): void {}
}
