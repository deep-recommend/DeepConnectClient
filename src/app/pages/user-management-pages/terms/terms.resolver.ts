import { Injectable } from '@angular/core';
import {
    ActivatedRouteSnapshot,
    Resolve,
    RouterStateSnapshot,
} from '@angular/router';
import { UiStore } from 'src/app/states/ui/ui.store';
import { LangService } from '../../../general/services/lang.service';

@Injectable()
export class TermsResolverService implements Resolve<void> {
    constructor(
        private readonly uiStore: UiStore,
        private readonly lang: LangService
    ) {}

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): void {
        this.uiStore.hideRoutingTab();
        this.uiStore.hideMobileHeader();
        this.uiStore.displayPageName(this.lang.isEn ? 'Terms' : '利用規約');
    }
}
