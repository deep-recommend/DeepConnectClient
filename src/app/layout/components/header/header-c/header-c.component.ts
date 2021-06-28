import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HeaderAccountMenu } from 'src/app/general/domains/layout/header-user-menu.domain';
import { AuthenticationService } from 'src/app/general/services/authentication.service';
import { accessTokenKey } from 'src/app/general/utilities/api';
import { LayoutService } from 'src/app/layout/services/layout.service';
import { UiQuery, UiStore } from 'src/app/states/ui';
import { UserQuery } from 'src/app/states/user';

@Component({
    selector: 'app-header-c',
    templateUrl: './header-c.component.html',
    styleUrls: ['./header-c.component.scss'],
})
export class HeaderCComponent implements OnInit, OnDestroy {
    headerAccountMenus$ = this.uiQuery.headerAccountMenus$;
    profile$ = this.userQuery.profile$;

    constructor(
        private readonly uiQuery: UiQuery,
        private readonly uiStore: UiStore,
        private readonly layoutService: LayoutService,
        private readonly router: Router,
        private readonly authService: AuthenticationService,
        private readonly userQuery: UserQuery
    ) {}

    ngOnInit(): void {
        this.authService.getProfile().subscribe();
    }

    ngOnDestroy(): void {
        this.uiStore.destroy();
    }

    onReceivedClickMenuButton(): void {
        if (this.uiQuery.isSideNavLocked) {
            this.uiStore.unlockSideNav();
            this.uiStore.closeSideNavFullMenu();
        } else {
            this.uiStore.openSideNavFullMenu();
            this.uiStore.lockSideNav();
            setTimeout(() => {
                this.layoutService.emitLockSideNav();
            }, 10);
        }
    }

    onReceivedClickHeaderLogo(): void {
        this.router.navigate(['/']);
    }

    onReceivedClickHeaderTitle(): void {
        this.router.navigate(['/']);
    }

    onReceivedClickAccountMenu(index: number, item: HeaderAccountMenu): void {
        console.warn('click icon menu', index, item);
        if (item.label === 'サインアウト') {
            localStorage.removeItem(accessTokenKey);
        }
    }

    onReceivedClickSignIn(): void {
        this.router.navigate(['/sign-in']);
    }

    onReceivedClickSignUp(): void {
        this.router.navigate(['/sign-up']);
    }

    hasChangedAccountMenuPerPath(): boolean {
        let bool: boolean = false;
        const getToken = localStorage.getItem(accessTokenKey);
        if (getToken) {
            bool = true;
        }
        return bool;
    }
}
