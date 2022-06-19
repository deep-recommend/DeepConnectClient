import { Injectable } from '@angular/core';
import {
    ActivatedRouteSnapshot,
    Resolve,
    RouterStateSnapshot,
} from '@angular/router';
import { forkJoin, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { AuthenticationService } from 'src/app/general/services/authentication.service';
import { UiService } from 'src/app/states/ui/ui.service';

@Injectable()
export class MyPageSettingResolverService implements Resolve<Observable<void>> {
    constructor(
        private readonly authenticationService: AuthenticationService,
        private readonly uiService: UiService
    ) {}

    resolve(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
    ): Observable<void> {
        this.uiService.displayRoutingTab();
        this.uiService.hideMobileHeader();
        this.uiService.hideLikeRoutingTab();
        this.uiService.displayPageName(route.data.title);

        return forkJoin(this.authenticationService.getProfile()).pipe(
            map((observer) => void observer)
        );
    }
}
