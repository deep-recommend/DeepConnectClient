import { createHeaderAccountMenu, HeaderAccountMenu } from '../../domains/layout/header-user-menu.domain';

export const headerAccountMenu: HeaderAccountMenu[] = [
    createHeaderAccountMenu({
        icon: 'settings',
        label: '設定',
        routerLink: '/',
    }),
    createHeaderAccountMenu({
        icon: 'logout',
        label: 'サインアウト',
        routerLink: '/sign-in',
    }),
];
