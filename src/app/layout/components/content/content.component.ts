import { Component, OnInit, ViewEncapsulation } from '@angular/core'
import { NavigationEnd, Router } from '@angular/router'

@Component({
    selector: 'app-content',
    templateUrl: './content.component.html',
    styleUrls: ['./content.component.scss'],
    encapsulation: ViewEncapsulation.None,
})
export class ContentComponent implements OnInit {
    constructor(private readonly router: Router) {
        this.router.routeReuseStrategy.shouldReuseRoute = () => {
            return false
        }

        this.router.events.subscribe((event) => {
            if (event instanceof NavigationEnd) {
                this.router.navigated = false
                window.scrollTo(0, 0)
            }
        })
    }

    ngOnInit(): void {}
}
