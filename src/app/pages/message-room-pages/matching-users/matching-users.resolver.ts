import { Injectable } from '@angular/core';
import {
    ActivatedRouteSnapshot,
    Resolve,
    RouterStateSnapshot,
} from '@angular/router';
import { forkJoin, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { RoomService } from 'src/app/states/room/room.service';
import { UiStore } from 'src/app/states/ui/ui.store';
import { AuthenticationService } from '../../../general/services/authentication.service';
import { LikeService } from '../../../states/like/like.service';
import { UserService } from '../../../states/user/user.service';

@Injectable()
export class MatchingUsersResolverService implements Resolve<Observable<void>> {
    constructor(
        private readonly uiStore: UiStore,
        private readonly roomService: RoomService,
        private readonly userService: UserService,
        private readonly likeService: LikeService,
        private readonly authenticationService: AuthenticationService
    ) {}

    resolve(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
    ): Observable<void> {
        this.uiStore.displayRoutingTab();
        this.uiStore.displayMobileHeader();
        this.uiStore.displayPageName(route.data.title);

        return forkJoin(
            this.userService.getUsersRequest(),
            this.likeService.getLikes(),
            this.authenticationService.getProfile(),
            this.roomService.getRoomsRequest()
        ).pipe(map((observer) => void observer));
    }
}
