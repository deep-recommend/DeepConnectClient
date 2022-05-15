import { Component, Input, EventEmitter, Output } from '@angular/core';
import { RoomProps } from 'src/app/states/room/room.model';
import { UserProps } from 'src/app/states/user/user.model';
import { UserQuery } from '../../../../states/user/user.query';

@Component({
    selector: 'app-matching-users-detail-p',
    templateUrl: './matching-users-detail-p.component.html',
    styleUrls: ['./matching-users-detail-p.component.scss'],
})
export class MatchingUsersDetailPComponent {
    room?: RoomProps;
    user?: UserProps;
    profileGetter: UserProps = this.userQuery.profileGetter;

    @Input('room') set roomSetter(data: RoomProps) {
        this.room = data;

        const userId = this.userQuery.getOtherUserIdByRoom(this.room);
        if (userId === this.profileGetter.id) return;
        this.user = this.userQuery.getById(userId);
    }
    @Output() clickToDetails: EventEmitter<RoomProps> =
        new EventEmitter<RoomProps>();

    constructor(private readonly userQuery: UserQuery) {}

    onClickToDetails(): void {
        this.clickToDetails.emit(this.room);
    }
}
