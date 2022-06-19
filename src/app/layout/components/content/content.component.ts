import {
    animate,
    query,
    style,
    transition,
    trigger,
} from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Component({
    selector: 'app-content',
    templateUrl: './content.component.html',
    styleUrls: ['./content.component.scss'],
    animations: [
        trigger('fadeAnimation', [
            transition('* => *', [
                query(':enter', [style({ opacity: 0 })], { optional: true }),

                query(
                    ':leave',
                    [
                        style({ opacity: 1 }),
                        animate('0.2s', style({ opacity: 0 })),
                    ],
                    { optional: true }
                ),

                query(
                    ':enter',
                    [
                        style({ opacity: 0 }),
                        animate('0.2s', style({ opacity: 1 })),
                    ],
                    { optional: true }
                ),
            ]),
        ]),
    ],
})
export class ContentComponent implements OnInit {
    constructor(private readonly router: Router) {
        this.router.routeReuseStrategy.shouldReuseRoute = () => {
            return false;
        };

        this.router.events.subscribe((event) => {
            if (event instanceof NavigationEnd) {
                this.router.navigated = false;
                window.scrollTo(0, 0);
            }
        });
    }

    ngOnInit(): void {}

    getRouterOutletState(outlet: any) {
        return outlet.isActivated ? outlet.activatedRoute : '';
    }
}
