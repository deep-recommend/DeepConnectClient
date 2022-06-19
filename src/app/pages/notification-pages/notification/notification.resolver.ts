import { Injectable } from '@angular/core';
import {
    ActivatedRouteSnapshot,
    Resolve,
    RouterStateSnapshot,
} from '@angular/router';
import { merge, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { AuthenticationService } from 'src/app/general/services/authentication.service';
import { LikeService } from 'src/app/states/like/like.service';
import { NotificationService } from 'src/app/states/notification/notification.service';
import { UiService } from 'src/app/states/ui/ui.service';
import { UserService } from 'src/app/states/user/user.service';
import { RoomService } from '../../../states/room/room.service';

@Injectable()
export class NotificationResolverService implements Resolve<Observable<void>> {
    constructor(
        private readonly userService: UserService,
        private readonly likeService: LikeService,
        private readonly authenticationService: AuthenticationService,
        private readonly uiService: UiService,
        private readonly notificationService: NotificationService,
        private readonly roomService: RoomService
    ) {}

    resolve(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
    ): Observable<void> {
        this.uiService.displayRoutingTab();
        this.uiService.displayMobileHeader();
        this.uiService.hideLikeRoutingTab();
        this.uiService.displayPageName(route.data.title);

        return merge(
            this.userService.getUsersRequest(),
            this.likeService.getLikes(),
            this.authenticationService.getProfile(),
            this.notificationService.getNotifications(),
            this.roomService.getRoomsRequest()
        ).pipe(map((observer) => void observer));
    }
}
