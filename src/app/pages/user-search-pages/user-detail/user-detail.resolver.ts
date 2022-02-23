import { Injectable } from '@angular/core';
import {
    ActivatedRouteSnapshot,
    Resolve,
    RouterStateSnapshot,
} from '@angular/router';
import { forkJoin, Observable } from 'rxjs';
import { map, mergeMap } from 'rxjs/operators';
import { userIdKey } from 'src/app/general/utilities/local-strage';
import { LikeService } from 'src/app/states/like/like.service';
import { UiStore } from 'src/app/states/ui/ui.store';
import { UserQuery } from 'src/app/states/user/user.query';
import { UserService } from 'src/app/states/user/user.service';

@Injectable()
export class UserDetailResolverService implements Resolve<Observable<void>> {
    constructor(
        private readonly userService: UserService,
        private readonly likeService: LikeService,
        private readonly uiStore: UiStore,
        private readonly userQuery: UserQuery
    ) {}

    resolve(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
    ): Observable<void> {
        const currentUserId = this.userQuery.currentUserId;
        const userId = this.userQuery.userIdGetter
            ? this.userQuery.userIdGetter
            : localStorage.getItem(userIdKey);

        this.uiStore.displayRoutingTab();
        this.uiStore.displayPageName(route.data.title);

        return forkJoin(
            this.userService.getOnlyUserRequest(userId),
            this.likeService.alreadyLikedByMyself(currentUserId, userId),
            this.likeService.matched(currentUserId, userId)
        ).pipe(
            mergeMap(async () =>
                this.uiStore.displayPageName(
                    String(this.userQuery.detailUserGetter?.stageName)
                )
            ),
            map((observer) => void observer)
        );
    }
}
