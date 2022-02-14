import { Injectable } from '@angular/core';
import {
    ActivatedRouteSnapshot,
    Resolve,
    RouterStateSnapshot,
} from '@angular/router';
import { forkJoin, Observable } from 'rxjs';
import { map, mergeMap } from 'rxjs/operators';
import { ProgressSpinnerService } from 'src/app/general/components/progress-spinner/progress-spinner.service';
import { AuthenticationService } from 'src/app/general/services/authentication.service';
import { userIdKey } from 'src/app/general/utilities/local-strage';
import { LikeService } from 'src/app/states/like/like.service';
import { UiStore } from 'src/app/states/ui/ui.store';
import { UserProps } from 'src/app/states/user/user.model';
import { UserQuery } from 'src/app/states/user/user.query';
import { UserService } from 'src/app/states/user/user.service';

@Injectable()
export class UserDetailResolverService implements Resolve<Observable<void>> {
    constructor(
        private readonly userService: UserService,
        private readonly likeService: LikeService,
        private readonly authenticationService: AuthenticationService,
        private readonly uiStore: UiStore,
        private readonly userQuery: UserQuery,
        private readonly spinner: ProgressSpinnerService
    ) {}

    resolve(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
    ): Observable<void> {
        this.uiStore.displayRoutingTab();
        this.uiStore.displayPageName(route.data.title);

        return forkJoin(
            this.userService.getUsersRequest(),
            this.likeService.getLikes(),
            this.authenticationService.getProfile(),
            this._getUserDetail()
        ).pipe(
            mergeMap(async () =>
                this.uiStore.displayPageName(
                    String(this.userQuery.detailUserGetter?.stageName)
                )
            ),
            mergeMap(async () => this.spinner.close()),
            map((observer) => void observer)
        );
    }

    private _getUserDetail(): Observable<UserProps> {
        const userId = this.userQuery.userIdGetter;
        return userId
            ? this.userService.getOnlyUserRequest(userId)
            : this.userService.getOnlyUserRequest(
                  Number(localStorage.getItem(userIdKey))
              );
    }
}
