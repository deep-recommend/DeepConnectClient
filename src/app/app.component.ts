import { DeepRecommendSplashScreenService } from './general/services/splash-screen.service';
import { Component, NgZone } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { latestUrlKey } from './general/utilities/local-strage';
import { LangService } from './general/services/lang.service';

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
        private readonly ngZone: NgZone,
        private readonly lang: LangService
    ) {
        window.onResumeApp = () => {
            this.ngZone.run(() => {
                setTimeout(() => {
                    location.reload();
                });
            });
        };

        window.onReturnApp = () => {
            this.ngZone.run(() => {
                setTimeout(() => {
                    location.reload();
                });
            });
        };

        this.router.events.subscribe((event) => {
            if (event instanceof NavigationEnd) {
                this.currentRoute = event.url;
                localStorage.setItem(latestUrlKey, this.currentRoute);
            }
        });

        this.splash.init();

        this.lang.init();

        this._setLatestUrlInit();

        // TODO: Join Room with Socket
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
