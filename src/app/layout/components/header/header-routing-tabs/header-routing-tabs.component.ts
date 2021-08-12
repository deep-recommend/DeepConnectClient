import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core'
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router'
import { NotificationProps } from 'src/app/states/notification'
import { UserQuery, UserStore } from 'src/app/states/user'

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

    @Input() notifications!: NotificationProps[] | null
    @Output() outputPageName: EventEmitter<string | null | undefined> = new EventEmitter<string | null | undefined>()

    constructor(private router: Router, private activatedRoute: ActivatedRoute, private userStore: UserStore) {
        this.router.routeReuseStrategy.shouldReuseRoute = function () {
            return false
        }

        this.routeLinks = [
            { icon: 'search', label: 'さがす', link: '/' },
            { icon: 'thumb_up', label: '組みたい', link: '/like-from-me' },
            { icon: 'message', label: 'メッセージ', link: '/matching-users' },
            { icon: 'notifications', label: '通知', link: '/notification' },
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

    route(): void {
        this.userStore.resetSearch()
        for (let i in this.routeLinks) {
            this.activeLinkIndex = Number(i)
        }
    }
}
