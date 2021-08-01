import { Component, OnInit } from '@angular/core'
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router'

@Component({
    selector: 'app-header-routing-tabs',
    templateUrl: './header-routing-tabs.component.html',
    styleUrls: ['./header-routing-tabs.component.scss'],
})
export class HeaderRoutingTabsComponent implements OnInit {
    public icon!: any[]
    public routeLinks: any[]
    public activeLinkIndex = 1
    private currentRoute = ''

    constructor(private router: Router, private activatedRoute: ActivatedRoute) {
        this.routeLinks = [
            { icon: 'search', label: 'さがす', link: '/' },
            { icon: 'thumb_up', label: 'いいね', link: '/like-from-me' },
            { icon: 'message', label: 'メッセージ', link: '/matching-users' },
            { icon: 'portrait', label: '特徴', link: '/feature' },
            { icon: 'account_circle', label: 'マイページ', link: '/my-page' },
        ]

        router.events.subscribe((event) => {
            if (event instanceof NavigationEnd) {
                this.currentRoute = '/' + event.url.slice(1)
                this.routeLinks.forEach((elm, index) => {
                    if (elm.link === this.currentRoute) {
                        this.activeLinkIndex = index
                    }
                })
            }
        })
    }

    ngOnInit(): void {}
}
