import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HeaderAccountMenu } from 'src/app/general/domains/layout/header-user-menu.domain';
import { LayoutService } from 'src/app/layout/services/layout.service';
import { UiQuery, UiStore } from 'src/app/states/ui';

@Component({
    selector: 'app-header-c',
    templateUrl: './header-c.component.html',
    styleUrls: ['./header-c.component.scss'],
})
export class HeaderCComponent implements OnInit {
    headerAccountMenus$ = this.uiQuery.headerAccountMenus$;

    constructor(
        private readonly uiQuery: UiQuery,
        private readonly uiStore: UiStore,
        private readonly layoutService: LayoutService,
        private readonly router: Router
    ) {}

    ngOnInit(): void {}

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
        console.log('click icon menu', index, item);
    }

    onReceivedClickSignIn(): void {
        this.router.navigate(['/sign-in']);
    }

    onReceivedClickSignUp(): void {
        this.router.navigate(['/sign-up']);
    }

    isChangingAccountMenuPerPath(): boolean {
        let bool: boolean;
        const currentPath = location.pathname;
        if (currentPath === '/') {
            bool = false;
        } else if (currentPath === '/sign-in') {
            bool = false;
        } else if (currentPath === '/sign-up') {
            bool = false;
        } else {
            bool = true;
        }
        return bool;
    }
}
