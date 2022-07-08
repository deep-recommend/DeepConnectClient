import { Component, EventEmitter, OnInit } from '@angular/core';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';
import { LangService } from '../../services/lang.service';

@Component({
    selector: 'app-like-routing-tabs',
    templateUrl: './like-routing-tabs.component.html',
    styleUrls: ['./like-routing-tabs.component.scss'],
})
export class LikeRoutingTabsComponent implements OnInit {
    public routeLinks: any[];
    public activeLinkIndex = 1;
    private currentRoute = '';

    constructor(
        private router: Router,
        private activatedRoute: ActivatedRoute,
        private lang: LangService
    ) {
        this.routeLinks = [
            {
                label: this.lang.isEn ? 'From myself' : '自分から',
                link: '/like-from-me',
            },
            {
                label: this.lang.isEn ? 'From others' : '相手から',
                link: '/like-from-others',
            },
            {
                label: this.lang.isEn ? 'Matched' : 'マッチング中',
                link: '/matched',
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
}
