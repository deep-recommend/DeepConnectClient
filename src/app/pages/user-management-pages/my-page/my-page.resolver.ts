import { Injectable } from '@angular/core';
import {
    ActivatedRouteSnapshot,
    Resolve,
    RouterStateSnapshot,
} from '@angular/router';
import { forkJoin, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { AuthenticationService } from 'src/app/general/services/authentication.service';

import { UserService } from 'src/app/states/user/user.service';
import { BlockService } from '../../../states/block';
import { FilterService } from '../../../states/filter';
import { UiService } from '../../../states/ui/ui.service';

@Injectable()
export class MyPageResolverService implements Resolve<Observable<void>> {
    constructor(
        private readonly uiService: UiService,
        private readonly userService: UserService,
        private readonly authenticationService: AuthenticationService,
        private readonly blockService: BlockService,
        private readonly filterService: FilterService
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
            this.authenticationService.getProfile(),
            this.blockService.getBlocks(),
            this.filterService.getFilters()
        ).pipe(map((observer) => void observer));
    }
}
