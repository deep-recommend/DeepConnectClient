import { Component, EventEmitter, Input, Output } from '@angular/core';
import { UserProps } from 'src/app/states/user/user.model';
import { RoomProps } from '../../../../states/room/room.model';
import { UserQuery } from '../../../../states/user/user.query';

@Component({
    selector: 'app-message-room-header-p',
    templateUrl: './message-room-header-p.component.html',
    styleUrls: ['./message-room-header-p.component.scss'],
})
export class MessageRoomHeaderPComponent {
    room?: RoomProps;
    user?: UserProps;

    @Input('room') set roomSetter(data: RoomProps | null) {
        if (!data) return;

        this.room = data;
        const userId = this.userQuery.getOtherUserIdByRoom(this.room);
        this.user = this.userQuery.getById(userId);
    }
    @Output() clickAccount: EventEmitter<number | undefined> = new EventEmitter<
        number | undefined
    >();

    constructor(private readonly userQuery: UserQuery) {}

    onClickAccount(userId: number | undefined): void {
        this.clickAccount.emit(userId);
    }
}
