import { createHeaderAccountMenu, HeaderAccountMenu } from '../../domains/layout/header-user-menu.domain'

export const headerAccountMenu: HeaderAccountMenu[] = [
    createHeaderAccountMenu({
        icon: 'settings',
        label: 'マイページ',
        routerLink: '/my-page',
    }),
    createHeaderAccountMenu({
        icon: 'logout',
        label: 'サインアウト',
        routerLink: '/sign-in',
    }),
]
