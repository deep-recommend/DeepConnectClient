import { FooterItem } from 'src/app/general/domains/layout/footer.domain';
import { HeaderAccountMenu } from 'src/app/general/domains/layout/header-user-menu.domain';
import { SideNavMenu } from 'src/app/general/domains/layout/sidenav-menu.domain';

export interface UiState {
    ui: {
        authErrMsg: string;
        pageName: string;
        isMessaging: boolean;
    };
    header: {
        accountMenus: HeaderAccountMenu[];
        isVisibleHeaders: boolean;
        isVisibleMobileHeaders: boolean;
        isVisibleLikeRoutingTab: boolean;
    };
    sideNav: {
        menus: SideNavMenu[];
        isFullMenuVisible: boolean;
        isLocked: boolean;
    };
    footer: {
        footerLawItems: FooterItem[];
        footerSnsItems: FooterItem[];
    };
}
