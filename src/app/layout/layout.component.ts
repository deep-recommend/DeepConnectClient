import { UiStore } from './../states/ui/ui.store';
import {
    Component,
    ElementRef,
    OnDestroy,
    OnInit,
    ViewChild,
} from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { NotificationService } from '../states/notification/notification.service';
import { UiQuery } from '../states/ui/ui.query';

@Component({
    selector: 'app-layout',
    templateUrl: './layout.component.html',
    styleUrls: ['./layout.component.scss'],
})
export class LayoutComponent implements OnInit, OnDestroy {
    subscriptions: Subscription[] = [];

    isVisibleHeaders$: Observable<boolean> = this.uiQuery.isVisibleHeaders$;
    isVisibleMobileHeader$: Observable<boolean> =
        this.uiQuery.isVisibleMobileHeaders$;
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
            this.subscriptions.push(
                this.notificationService.getNotifications().subscribe()
            );
        }
    }

    ngOnDestroy(): void {
        this.subscriptions.forEach((sub) => sub.unsubscribe());
    }
}
