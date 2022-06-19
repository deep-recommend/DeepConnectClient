import { Injectable } from '@angular/core';
import {
    ActivatedRouteSnapshot,
    Resolve,
    RouterStateSnapshot,
} from '@angular/router';
import { forkJoin, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { AppService } from '../../../states/app.service';

@Injectable()
export class MatchingUsersResolverService implements Resolve<Observable<void>> {
    constructor(private readonly service: AppService) {}

    resolve(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
    ): Observable<void> {
        this.service.ui.displayRoutingTab();
        this.service.ui.displayMobileHeader();
        this.service.ui.hideLikeRoutingTab();
        this.service.ui.quitMessaging();
        this.service.ui.displayPageName(route.data.title);

        return forkJoin(
            this.service.user.getUsersRequest(),
            this.service.like.getLikes(),
            this.service.auth.getProfile(),
            this.service.room.getRoomsRequest()
        ).pipe(map((observer) => void observer));
    }
}
