import { createSideNavMenu, SideNavMenu } from '../../domains/layout/sidenav-menu.domain';

export const sideNavMenu: SideNavMenu[] = [
    createSideNavMenu({
        icon: 'apps',
        label: 'dashboard',
        routerLink: '/',
    }),
    createSideNavMenu({
        icon: 'public',
        label: 'DeepRecommend Museum',
        hrefLink: 'https://deep-recommend.com/',
    }),
];
