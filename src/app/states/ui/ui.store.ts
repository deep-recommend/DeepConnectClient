import { Injectable } from '@angular/core'
import { Store, StoreConfig } from '@datorama/akita'
import { footerLawItem, footerSnsItem } from 'src/app/general/configs/layout/footer.config'
import { headerAccountMenu } from 'src/app/general/configs/layout/header.config'
import { sideNavMenu } from 'src/app/general/configs/layout/sidenav.config'
import { UiState } from './ui.model'

export const initialState: () => UiState = () => ({
    ui: {
        authErrMsg: '',
    },
    header: {
        accountMenus: headerAccountMenu,
        isVisible: true,
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
})

@Injectable({ providedIn: 'root' })
@StoreConfig({ name: 'ui' })
export class UiStore extends Store<UiState> {
    constructor() {
        super(initialState())
    }

    displayErrMsg(errMsg: string): void {
        this._configureErrMsg(errMsg)
    }

    openSideNavFullMenu(): void {
        this._configureSideNavIsFullMenuVisible(true)
    }

    closeSideNavFullMenu(): void {
        this._configureSideNavIsFullMenuVisible(false)
    }

    lockSideNav(): void {
        this._configureSideNavLock(true)
    }

    unlockSideNav(): void {
        this._configureSideNavLock(false)
    }

    private _configureErrMsg(errMsg: string): void {
        this.update({
            ui: {
                ...this.getValue().ui,
                authErrMsg: errMsg,
            },
        })
    }

    private _configureSideNavIsFullMenuVisible(bool: boolean): void {
        if (this.getValue().sideNav.isLocked) {
            return
        }

        this.update({
            sideNav: {
                ...this.getValue().sideNav,
                isFullMenuVisible: bool,
            },
        })
    }

    private _configureSideNavLock(bool: boolean): void {
        this.update({
            sideNav: {
                ...this.getValue().sideNav,
                isLocked: bool,
            },
        })
    }
}
