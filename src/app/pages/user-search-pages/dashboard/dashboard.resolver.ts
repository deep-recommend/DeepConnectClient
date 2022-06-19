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
import { UiService } from 'src/app/states/ui/ui.service';
import { UserService } from 'src/app/states/user/user.service';

@Injectable()
export class DashboardResolverService implements Resolve<Observable<void>> {
    constructor(
        private readonly userService: UserService,
        private readonly likeService: LikeService,
        private readonly authenticationService: AuthenticationService,
        private readonly uiService: UiService
    ) {}

    resolve(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
    ): Observable<void> {
        this.uiService.displayRoutingTab();
        this.uiService.displayMobileHeader();
        this.uiService.hideLikeRoutingTab();
        this.uiService.displayPageName(route.data.title);

        return forkJoin(
            this.userService.getUsersRequest(),
            this.likeService.getLikes(),
            this.authenticationService.getProfile()
        ).pipe(map((observer) => void observer));
    }
}
