import { Component, OnInit } from '@angular/core'
import { NotificationService } from '../states/notification'
import { UiQuery } from '../states/ui'
@Component({
    selector: 'app-layout',
    templateUrl: './layout.component.html',
    styleUrls: ['./layout.component.scss'],
})
export class LayoutComponent implements OnInit {
    isVisibleHeaders$ = this.uiQuery.isVisibleHeaders$

    constructor(private readonly uiQuery: UiQuery, private readonly notificationService: NotificationService) {}

    ngOnInit(): void {
        this.notificationService.getNotifications().subscribe()
    }
}
