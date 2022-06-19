import { Injectable } from '@angular/core';
import {
    ActivatedRouteSnapshot,
    Resolve,
    RouterStateSnapshot,
} from '@angular/router';
import { forkJoin, Observable } from 'rxjs';
import { map, mergeMap } from 'rxjs/operators';
import { LikeService } from 'src/app/states/like/like.service';
import { UiService } from 'src/app/states/ui/ui.service';
import { UserQuery } from 'src/app/states/user/user.query';
import { UserService } from 'src/app/states/user/user.service';
import { AuthenticationService } from '../../../general/services/authentication.service';
import {
    currentUserIdKey,
    otherUserIdKey,
} from '../../../general/utilities/local-strage';
import { RoomService } from '../../../states/room/room.service';
import * as AOS from 'aos';

@Injectable()
export class UserDetailResolverService implements Resolve<Observable<void>> {
    constructor(
        private readonly userService: UserService,
        private readonly likeService: LikeService,
        private readonly uiService: UiService,
        private readonly userQuery: UserQuery,
        private readonly authenticationService: AuthenticationService,
        private readonly roomService: RoomService
    ) {}

    resolve(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
    ): Observable<void> {
        const currentUserId = this.userQuery.currentUserId
            ? this.userQuery.currentUserId
            : localStorage.getItem(currentUserIdKey);
        const userId = this.userQuery.userIdGetter
            ? this.userQuery.userIdGetter
            : localStorage.getItem(otherUserIdKey);

        this.uiService.displayRoutingTab();
        this.uiService.hideMobileHeader();
        this.uiService.hideLikeRoutingTab();
        this.uiService.quitMessaging();
        AOS.init({
            duration: 1000,
        });

        return forkJoin(
            this.userService.getOnlyUserRequest(userId),
            this.likeService.alreadyLikedByMyself(
                Number(currentUserId),
                userId
            ),
            this.likeService.alreadyLikedByOthers(currentUserId, userId),
            this.likeService.matched(currentUserId, userId),
            this.authenticationService.getProfile(),
            this.roomService.getRoomsRequest()
        ).pipe(
            mergeMap(async () => {
                this.uiService.displayPageName(
                    String(this.userQuery.detailUserGetter?.displayedName)
                );
            }),
            map((observer) => void observer)
        );
    }
}
