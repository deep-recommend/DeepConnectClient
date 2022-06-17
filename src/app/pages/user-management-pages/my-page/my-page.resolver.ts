import { Injectable } from '@angular/core';
import {
    ActivatedRouteSnapshot,
    Resolve,
    RouterStateSnapshot,
} from '@angular/router';
import { forkJoin, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { AuthenticationService } from 'src/app/general/services/authentication.service';
import { BlockService } from 'src/app/states/block';
import { FilterService } from 'src/app/states/filter';
import { UserService } from 'src/app/states/user/user.service';
import { UiStore } from '../../../states/ui/ui.store';

@Injectable()
export class MyPageResolverService implements Resolve<Observable<void>> {
    constructor(
        private readonly uiStore: UiStore,
        private readonly userService: UserService,
        private readonly authenticationService: AuthenticationService,
        private readonly blockService: BlockService,
        private readonly filterService: FilterService
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
            this.authenticationService.getProfile(),
            this.blockService.getBlocks(),
            this.filterService.getFilters()
        ).pipe(map((observer) => void observer));
    }
}
