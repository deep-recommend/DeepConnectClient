import { Component, EventEmitter, Input, Output } from '@angular/core';
import { RoomProps } from 'src/app/states/room/room.model';
import { UserProps } from 'src/app/states/user/user.model';

@Component({
    selector: 'app-matching-users-p',
    templateUrl: './matching-users-p.component.html',
    styleUrls: ['./matching-users-p.component.scss'],
})
export class MatchingUsersPComponent {
    @Input() rooms: RoomProps[] | null = [];

    @Output() clickUserToMessage: EventEmitter<RoomProps> =
        new EventEmitter<RoomProps>();
    @Output() outputUsers: EventEmitter<UserProps> =
        new EventEmitter<UserProps>();

    onReceivedClickUserToMessage(room: RoomProps): void {
        this.clickUserToMessage.emit(room);
    }
}
