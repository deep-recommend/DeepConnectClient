import {
    createSideNavMenu,
    SideNavMenu,
} from '../../domains/layout/sidenav-menu.domain';

export const sideNavMenu: SideNavMenu[] = [
    createSideNavMenu({
        icon: 'search',
        label: 'さがす',
        routerLink: '/',
    }),
    createSideNavMenu({
        icon: 'thumb_up',
        label: 'いいね',
        routerLink: '/like-from-me',
    }),
    createSideNavMenu({
        icon: 'message',
        label: 'メッセージ',
        routerLink: '/matching-users',
    }),
    createSideNavMenu({
        icon: 'account_circle',
        label: 'マイページ',
        routerLink: '/my-page',
    }),
    createSideNavMenu({
        icon: 'foot',
        label: '足跡',
        routerLink: '/',
    }),
    createSideNavMenu({
        icon: 'public',
        label: 'DeepRecommend Museum',
        hrefLink: 'https://deep-recommend.com/',
    }),
];
