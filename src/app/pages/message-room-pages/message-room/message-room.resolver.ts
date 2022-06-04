import { Injectable } from '@angular/core';
import {
    ActivatedRouteSnapshot,
    Resolve,
    RouterStateSnapshot,
} from '@angular/router';
import { forkJoin, Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { UiStore } from 'src/app/states/ui/ui.store';
import { AuthenticationService } from '../../../general/services/authentication.service';
import { currentRoomIdKey } from '../../../general/utilities/local-strage';
import { MessageService } from '../../../states/message/message.service';
import { RoomProps } from '../../../states/room/room.model';
import { RoomQuery } from '../../../states/room/room.query';
import { RoomService } from '../../../states/room/room.service';
import { RoomStore } from '../../../states/room/room.store';
import { UserService } from '../../../states/user/user.service';

@Injectable()
export class MessageRoomResolverService implements Resolve<Observable<void>> {
    constructor(
        private readonly uiStore: UiStore,
        private readonly messageService: MessageService,
        private readonly authenticationService: AuthenticationService,
        private readonly roomService: RoomService,
        private readonly roomQuery: RoomQuery,
        private readonly roomStore: RoomStore,
        private readonly userService: UserService
    ) {}

    resolve(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
    ): Observable<void> {
        this.uiStore.hideRoutingTab();
        this.uiStore.hideMobileHeader();
        this.uiStore.displayPageName(route.data.title);

        const currentRoomId = this.roomQuery.currentRoomId
            ? this.roomQuery.currentRoomId
            : localStorage.getItem(currentRoomIdKey);
        this.roomStore.updateCurrentRoomId(currentRoomId);

        return forkJoin(
            this.messageService.getMessagesRequest(),
            this.authenticationService.getProfile(),
            this.roomService.getRoomsRequest(),
            this.userService.getUsersAllRequest()
        ).pipe(
            map((observer) => {
                const room = this.roomQuery.getById(currentRoomId);
                this.roomStore.updateCurrentRoom(room as RoomProps);
            })
        );
    }
}
