import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { RoomProps } from 'src/app/states/room/room.model';
import { AppQuery } from '../../../../states/app.query';
import { AppStore } from '../../../../states/app.store';

@Component({
    selector: 'app-matching-users-c',
    templateUrl: './matching-users-c.component.html',
    styleUrls: ['./matching-users-c.component.scss'],
})
export class MatchingUsersCComponent {
    existsMatchingUsers$: Observable<boolean> =
        this.query.user.existsMatchingUsers$;

    isMobile$: Observable<boolean> = this.query.ui.isMobile$;
    rooms$: Observable<RoomProps[]> = this.query.room.rooms$;
    profileGetter = this.query.user.profileGetter;

    constructor(
        private readonly router: Router,
        private readonly store: AppStore,
        private readonly query: AppQuery
    ) {}

    onReceivedClickUserToMessage(room: RoomProps): void {
        this.store.room.updateCurrentRoom(room);
        this.router.navigate([`/message-room/${room?.id}`]);
    }
}
