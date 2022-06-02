import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { RoomProps } from 'src/app/states/room/room.model';
import { RoomQuery } from 'src/app/states/room/room.query';
import { UserQuery } from 'src/app/states/user/user.query';
import { RoomStore } from '../../../../states/room/room.store';

@Component({
    selector: 'app-matching-users-c',
    templateUrl: './matching-users-c.component.html',
    styleUrls: ['./matching-users-c.component.scss'],
})
export class MatchingUsersCComponent {
    existsMatchingUsers$: Observable<boolean> =
        this.userQuery.existsMatchingUsers$;

    rooms$: Observable<RoomProps[]> = this.roomQuery.rooms$;
    profileGetter = this.userQuery.profileGetter;

    constructor(
        private readonly userQuery: UserQuery,
        private readonly router: Router,
        private readonly roomQuery: RoomQuery,
        private readonly roomStore: RoomStore
    ) {}

    onReceivedClickUserToMessage(room: RoomProps): void {
        this.roomStore.updateCurrentRoom(room);
        this.router.navigate([`/message-room/${room?.id}`]);
    }
}
