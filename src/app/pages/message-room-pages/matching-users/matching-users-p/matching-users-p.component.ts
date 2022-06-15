import { Component, EventEmitter, Input, Output } from '@angular/core';
import { RoomProps } from 'src/app/states/room/room.model';
import { UserProps } from 'src/app/states/user/user.model';

@Component({
    selector: 'app-matching-users-p',
    templateUrl: './matching-users-p.component.html',
    styleUrls: ['./matching-users-p.component.scss'],
})
export class MatchingUsersPComponent {
    private _rooms!: RoomProps[];

    @Input() set rooms(rooms: RoomProps[] | null) {
        // TODO: 消せるか確認
        this._rooms = rooms?.filter((room: RoomProps) => {
            const duplicated = rooms.find(
                (_room) =>
                    room.userA === _room.userB && room.userB === _room.userA
            );

            if (!duplicated?.id) return true;

            if (duplicated?.id < room.id) return false;

            return true;
        }) as RoomProps[];
    }

    @Output() clickUserToMessage: EventEmitter<RoomProps> =
        new EventEmitter<RoomProps>();
    @Output() outputUsers: EventEmitter<UserProps> =
        new EventEmitter<UserProps>();

    get rooms(): RoomProps[] | null {
        return this._rooms;
    }

    onReceivedClickUserToMessage(room: RoomProps): void {
        this.clickUserToMessage.emit(room);
    }
}
