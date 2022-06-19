import { Injectable } from '@angular/core';
import { Store, StoreConfig } from '@datorama/akita';
import {
    footerLawItem,
    footerSnsItem,
} from 'src/app/general/configs/layout/footer.config';
import { headerAccountMenu } from 'src/app/general/configs/layout/header.config';
import { sideNavMenu } from 'src/app/general/configs/layout/sidenav.config';
import { UiState } from './ui.model';

export const initialState: () => UiState = () => ({
    ui: {
        authErrMsg: String(),
        pageName: String(),
        isMessaging: false,
    },
    header: {
        accountMenus: headerAccountMenu,
        isVisibleHeaders: true,
        isVisibleMobileHeaders: true,
        isVisibleLikeRoutingTab: true,
    },
    sideNav: {
        menus: sideNavMenu,
        isFullMenuVisible: false,
        isLocked: false,
    },
    footer: {
        footerLawItems: footerLawItem,
        footerSnsItems: footerSnsItem,
    },
});

@Injectable({ providedIn: 'root' })
@StoreConfig({ name: 'ui' })
export class UiStore extends Store<UiState> {
    constructor() {
        super(initialState());
    }

    configureErrMsg(errMsg: string): void {
        this.update({
            ui: {
                ...this.getValue().ui,
                authErrMsg: errMsg,
            },
        });
    }

    configurePageName(pageName: string): void {
        this.update({
            ui: {
                ...this.getValue().ui,
                pageName: pageName,
            },
        });
    }

    configMessaging(bool: boolean): void {
        this.update({
            ui: {
                ...this.getValue().ui,
                isMessaging: bool,
            },
        });
    }

    configureSideNavIsFullMenuVisible(bool: boolean): void {
        if (this.getValue().sideNav.isLocked) {
            return;
        }

        this.update({
            sideNav: {
                ...this.getValue().sideNav,
                isFullMenuVisible: bool,
            },
        });
    }

    configureSideNavLock(bool: boolean): void {
        this.update({
            sideNav: {
                ...this.getValue().sideNav,
                isLocked: bool,
            },
        });
    }

    configRoutingTabDisplay(bool: boolean): void {
        this.update({
            header: {
                ...this.getValue().header,
                isVisibleHeaders: bool,
            },
        });
    }

    configMobileHeaderDisplay(bool: boolean): void {
        this.update({
            header: {
                ...this.getValue().header,
                isVisibleMobileHeaders: bool,
            },
        });
    }

    configLikeRoutingTabDisplay(bool: boolean): void {
        this.update({
            header: {
                ...this.getValue().header,
                isVisibleLikeRoutingTab: bool,
            },
        });
    }
}
