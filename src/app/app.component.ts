import { DeepRecommendSplashScreenService } from './general/services/splash-screen.service';
import { Component, NgZone } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { latestUrlKey } from './general/utilities/local-strage';

interface Window {
    onResumeApp(): void;
    onReturnApp(): void;
}
declare var window: Window;

@Component({
    selector: 'app-root',
    template: `<app-layout></app-layout>`,
})
export class AppComponent {
    currentRoute: string = '';

    constructor(
        private readonly router: Router,
        private readonly splash: DeepRecommendSplashScreenService,
        private readonly ngZone: NgZone
    ) {
        window.onResumeApp = () => {
            location.reload();
        };

        window.onReturnApp = () => {
            this._setLatestUrlInit();
        };

        this.splash.init();

        this.router.events.subscribe((event) => {
            if (event instanceof NavigationEnd) {
                this.currentRoute = event.url;
                localStorage.setItem(latestUrlKey, this.currentRoute);
            }
        });

        this._setLatestUrlInit();

        // this.authenticationService.getProfile().subscribe((user) => {
        //     this.socket.joinRooms(user.id);
        // });
    }

    private _setLatestUrlInit(): void {
        const latesrUrl = localStorage.getItem(latestUrlKey);
        if (latesrUrl) {
            this.router.navigate([latesrUrl]);
        }
    }
}
