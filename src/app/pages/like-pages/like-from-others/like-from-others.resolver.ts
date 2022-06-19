import { Injectable } from '@angular/core';
import {
    ActivatedRouteSnapshot,
    Resolve,
    RouterStateSnapshot,
} from '@angular/router';
import { forkJoin, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { AuthenticationService } from 'src/app/general/services/authentication.service';
import { LikeService } from 'src/app/states/like/like.service';
import { UserService } from 'src/app/states/user/user.service';
import { UiService } from '../../../states/ui/ui.service';

@Injectable()
export class LikeFromOthersResolverService
    implements Resolve<Observable<void>>
{
    constructor(
        private readonly uiService: UiService,
        private readonly userService: UserService,
        private readonly likeService: LikeService,
        private readonly authenticationService: AuthenticationService
    ) {}

    resolve(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
    ): Observable<void> {
        this.uiService.displayRoutingTab();
        this.uiService.hideMobileHeader();
        this.uiService.displayLikeRoutingTab();

        return forkJoin(
            this.userService.getLikedFromOthersUsersRequest(),
            this.likeService.getLikes(),
            this.authenticationService.getProfile()
        ).pipe(map((observer) => void observer));
    }
}
