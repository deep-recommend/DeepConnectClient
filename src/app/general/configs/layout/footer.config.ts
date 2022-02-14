import {
    createFooterItem,
    FooterItem,
} from '../../domains/layout/footer.domain';

export const footerLawItem: FooterItem[] = [
    createFooterItem({
        icon: 'settings',
        label: '事業概要',
        hrefLink: '/',
    }),
    createFooterItem({
        icon: 'settings',
        label: '利用規約',
        routerLink: '/',
    }),
    createFooterItem({
        icon: 'settings',
        label: 'プライバシーポリシー',
        routerLink: '/',
    }),
    createFooterItem({
        icon: 'settings',
        label: '特定商取引法に基づく表記',
        routerLink: '/',
    }),
    createFooterItem({
        icon: 'settings',
        label: 'お問い合わせ',
        routerLink: '/',
    }),
];

export const footerSnsItem: FooterItem[] = [
    createFooterItem({
        icon: 'public',
        label: 'FaceBook',
        hrefLink: 'https://www.facebook.com/recommend.deep/',
    }),
    createFooterItem({
        icon: 'public',
        label: 'Twitter',
        hrefLink: 'https://twitter.com/DeepRecommend',
    }),
    createFooterItem({
        icon: 'public',
        label: 'Instagram',
        hrefLink: 'https://www.instagram.com/deep_recommend/',
    }),
    createFooterItem({
        icon: 'public',
        label: 'YouTube',
        hrefLink:
            'https://www.youtube.com/channel/UCSPkV4QQmj_hT1LA-CAtUPg/featured',
    }),
    createFooterItem({
        icon: 'public',
        label: 'TikTok',
        hrefLink: 'https://www.tiktok.com/@deeprecommend?',
    }),
];
