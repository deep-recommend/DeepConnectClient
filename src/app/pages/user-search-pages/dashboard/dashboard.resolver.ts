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
import { UiStore } from 'src/app/states/ui/ui.store';
import { UserService } from 'src/app/states/user/user.service';

@Injectable()
export class DashboardResolverService implements Resolve<Observable<void>> {
    constructor(
        private readonly userService: UserService,
        private readonly likeService: LikeService,
        private readonly authenticationService: AuthenticationService,
        private readonly uiStore: UiStore
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
            this.authenticationService.getProfile()
        ).pipe(map((observer) => void observer));
    }
}
