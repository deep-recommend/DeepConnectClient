import { Injectable } from '@angular/core';
import { Query } from '@datorama/akita';
import { UiStore } from './ui.store';
import { UiState } from './ui.model';

@Injectable({ providedIn: 'root' })
export class UiQuery extends Query<UiState> {
    ui$ = this.select('ui');
    authErrMsg$ = this.select((state) => state.ui.authErrMsg);

    header$ = this.select('header');
    headerAccountMenus$ = this.select((state) => state.header.accountMenus);
    isVisibleHeaders$ = this.select((state) => state.header.isVisible);

    sideNav$ = this.select('sideNav');
    sideNavMenus$ = this.select((state) => state.sideNav.menus);
    isSideNavFullMenuVisible$ = this.select((state) => state.sideNav.isFullMenuVisible);

    footer$ = this.select('footer');
    footerLawItems$ = this.select((state) => state.footer.footerLawItems);
    footerSnsItems$ = this.select((state) => state.footer.footerSnsItems);

    get isSideNavFullMenuVisible(): boolean {
        return this.getValue().sideNav.isFullMenuVisible;
    }

    get isSideNavLocked(): boolean {
        return this.getValue().sideNav.isLocked;
    }

    constructor(protected readonly store: UiStore) {
        super(store);
    }
}
