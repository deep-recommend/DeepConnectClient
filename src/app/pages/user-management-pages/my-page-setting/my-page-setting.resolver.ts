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
import { LangService } from '../../../general/services/lang.service';

@Injectable()
export class MyPageSettingResolverService implements Resolve<Observable<void>> {
    constructor(
        private readonly authenticationService: AuthenticationService,
        private readonly uiStore: UiStore,
        private readonly lang: LangService
    ) {}

    resolve(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
    ): Observable<void> {
        this.uiStore.displayRoutingTab();
        this.uiStore.hideMobileHeader();
        this.uiStore.displayPageName(
            this.lang.isEn ? 'Edit profile' : 'プロフィール編集'
        );

        return forkJoin(this.authenticationService.getProfile()).pipe(
            map((observer) => void observer)
        );
    }
}
