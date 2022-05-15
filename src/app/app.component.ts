import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { latestUrlKey } from './general/utilities/local-strage';

@Component({
    selector: 'app-root',
    template: `<app-layout></app-layout>`,
})
export class AppComponent {
    currentRoute: string = '';

    constructor(private router: Router) {
        this.router.events.subscribe((event) => {
            if (event instanceof NavigationEnd) {
                this.currentRoute = event.url;
                localStorage.setItem(latestUrlKey, this.currentRoute);
            }
        });

        this._setLatestUrlInit();
    }

    private _setLatestUrlInit(): void {
        const latesrUrl = localStorage.getItem(latestUrlKey);
        if (latesrUrl) {
            this.router.navigate([latesrUrl]);
        }
    }
}
