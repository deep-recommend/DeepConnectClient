import { Injectable } from '@angular/core';
import { UiStore } from './ui.store';

@Injectable({
    providedIn: 'root',
})
export class UiService {
    constructor(protected uiStore: UiStore) {}

    displayErrMsg(errMsg: string): void {
        this.uiStore.configureErrMsg(errMsg);
    }

    displayPageName(pageName: string): void {
        this.uiStore.configurePageName(pageName);
    }

    openSideNavFullMenu(): void {
        this.uiStore.configureSideNavIsFullMenuVisible(true);
    }

    closeSideNavFullMenu(): void {
        this.uiStore.configureSideNavIsFullMenuVisible(false);
    }

    lockSideNav(): void {
        this.uiStore.configureSideNavLock(true);
    }

    unlockSideNav(): void {
        this.uiStore.configureSideNavLock(false);
    }

    displayRoutingTab(): void {
        this.uiStore.configRoutingTabDisplay(true);
    }

    hideRoutingTab(): void {
        this.uiStore.configRoutingTabDisplay(false);
    }

    displayMobileHeader(): void {
        this.uiStore.configMobileHeaderDisplay(true);
    }

    hideMobileHeader(): void {
        this.uiStore.configMobileHeaderDisplay(false);
    }

    displayLikeRoutingTab(): void {
        this.uiStore.configLikeRoutingTabDisplay(true);
    }

    hideLikeRoutingTab(): void {
        this.uiStore.configLikeRoutingTabDisplay(false);
    }

    messaging(): void {
        this.uiStore.configMessaging(true);
    }

    quitMessaging(): void {
        this.uiStore.configMessaging(false);
    }
}
