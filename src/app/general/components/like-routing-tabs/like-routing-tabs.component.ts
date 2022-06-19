import { Component } from '@angular/core';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';
import { Observable } from 'rxjs';
import { AppQuery } from '../../../states/app.query';

@Component({
    selector: 'app-like-routing-tabs',
    templateUrl: './like-routing-tabs.component.html',
    styleUrls: ['./like-routing-tabs.component.scss'],
})
export class LikeRoutingTabsComponent {
    public routeLinks: any[];
    public activeLinkIndex = 1;
    private currentRoute = '';

    isMobile$: Observable<boolean> = this.query.ui.isMobile$;

    constructor(
        private router: Router,
        private activatedRoute: ActivatedRoute,
        private readonly query: AppQuery
    ) {
        this.routeLinks = [
            { label: '自分から', link: '/like-from-me' },
            { label: '相手から', link: '/like-from-others' },
            { label: 'マッチング中', link: '/matched' },
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
}
