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
export class LikeFromMeResolverService implements Resolve<Observable<void>> {
    constructor(private readonly service: AppService) {}

    resolve(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
    ): Observable<void> {
        this.service.ui.displayRoutingTab();
        this.service.ui.hideMobileHeader();
        this.service.ui.displayLikeRoutingTab();

        return forkJoin(
            this.service.user.getLikedFromMeUsersRequest(),
            this.service.like.getLikes(),
            this.service.auth.getProfile()
        ).pipe(map((observer) => void observer));
    }
}
