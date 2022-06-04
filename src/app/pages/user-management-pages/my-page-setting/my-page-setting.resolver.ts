import { Injectable } from '@angular/core';
import {
    ActivatedRouteSnapshot,
    Resolve,
    RouterStateSnapshot,
} from '@angular/router';
import { forkJoin, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { AuthenticationService } from 'src/app/general/services/authentication.service';
import { UiStore } from 'src/app/states/ui/ui.store';

@Injectable()
export class MyPageSettingResolverService implements Resolve<Observable<void>> {
    constructor(
        private readonly authenticationService: AuthenticationService,
        private readonly uiStore: UiStore
    ) {}

    resolve(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
    ): Observable<void> {
        this.uiStore.displayRoutingTab();
        this.uiStore.hideMobileHeader();
        this.uiStore.displayPageName(route.data.title);

        return forkJoin(this.authenticationService.getProfile()).pipe(
            map((observer) => void observer)
        );
    }
}
