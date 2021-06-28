import { createSideNavMenu, SideNavMenu } from '../../domains/layout/sidenav-menu.domain';

export const sideNavMenu: SideNavMenu[] = [
    createSideNavMenu({
        icon: 'search',
        label: 'さがす',
        routerLink: '/',
    }),
    createSideNavMenu({
        icon: 'thumb_up',
        label: 'いいね',
        routerLink: '/',
    }),
    createSideNavMenu({
        icon: 'message',
        label: 'メッセージ',
        routerLink: '/',
    }),
    createSideNavMenu({
        icon: 'account_circle',
        label: 'マイページ',
        routerLink: '/',
    }),
    createSideNavMenu({
        icon: 'public',
        label: 'DeepRecommend Museum',
        hrefLink: 'https://deep-recommend.com/',
    }),
];
