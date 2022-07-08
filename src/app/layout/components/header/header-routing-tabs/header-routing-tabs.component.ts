import { Component, Input, OnInit } from '@angular/core';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';
import { RouterLinkProps } from 'src/app/general/interfaces/router-link.interface';
import { NotificationProps } from 'src/app/states/notification/notification.model';
import { UserStore } from 'src/app/states/user/user.store';
import { LangService } from '../../../../general/services/lang.service';

@Component({
    selector: 'app-header-routing-tabs',
    templateUrl: './header-routing-tabs.component.html',
    styleUrls: ['./header-routing-tabs.component.scss'],
})
export class HeaderRoutingTabsComponent implements OnInit {
    public icon: string | undefined;
    public routeLinks: RouterLinkProps[];
    public activeLinkIndex: number = 1;
    private currentRoute: string = '/';

    @Input() notifications!: NotificationProps[] | null | undefined;

    constructor(
        private router: Router,
        private activatedRoute: ActivatedRoute,
        private userStore: UserStore,
        private lang: LangService
    ) {
        this.router.routeReuseStrategy.shouldReuseRoute = () => {
            return false;
        };

        this.routeLinks = [
            {
                icon: 'search',
                label: this.lang.isEn ? 'Search ' : 'さがす',
                link: '/',
            },
            {
                icon: 'thumb_up',
                label: this.lang.isEn ? 'Team up' : '組みたい',
                link: '/like-from-me',
            },
            {
                icon: 'message',
                label: this.lang.isEn ? 'Message' : 'メッセージ',
                link: '/matching-users',
            },
            {
                icon: 'notifications',
                label: this.lang.isEn ? 'Notification' : '通知',
                link: '/notification',
            },
            {
                icon: 'account_circle',
                label: this.lang.isEn ? 'My Page' : 'マイページ',
                link: '/my-page',
            },
        ];

        router.events.subscribe((event) => {
            if (event instanceof NavigationEnd) {
                this.currentRoute = '/' + event.url.slice(1);
                this.routeLinks.forEach((elm, index) => {
                    if (elm.link === this.currentRoute) {
                        this.activeLinkIndex = index;
                    }
                });
            }
        });
    }

    ngOnInit(): void {}

    route(i: number): void {
        this.userStore.resetSearch();
        this.activeLinkIndex = i;
    }
}
