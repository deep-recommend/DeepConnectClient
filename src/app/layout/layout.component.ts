import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { NotificationService } from '../states/notification/notification.service';
import { UiQuery } from '../states/ui/ui.query';

@Component({
    selector: 'app-layout',
    templateUrl: './layout.component.html',
    styleUrls: ['./layout.component.scss'],
})
export class LayoutComponent implements OnInit {
    subscriptions: Subscription[] = [];

    isMobile$: Observable<boolean> = this.uiQuery.isMobile$;
    isVisibleHeaders$: Observable<boolean> = this.uiQuery.isVisibleHeaders$;
    isVisibleMobileHeader$: Observable<boolean> =
        this.uiQuery.isVisibleMobileHeaders$;
    isVisibleLikeRoutingTab$: Observable<boolean> =
        this.uiQuery.isVisibleLikeRoutingTab$;
    isMessaging$: Observable<boolean> = this.uiQuery.isMessaging$;

    @ViewChild('scroll') scrollContainer!: ElementRef;

    constructor(
        private readonly uiQuery: UiQuery,
        private readonly notificationService: NotificationService
    ) {}

    ngOnInit(): void {
        if (
            location.pathname !== 'sign-in' &&
            location.pathname !== 'sign-up'
        ) {
            this.notificationService.getNotifications().subscribe();
        }
    }
}
