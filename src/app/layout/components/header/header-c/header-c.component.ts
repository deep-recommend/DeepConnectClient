import { Component, OnInit } from '@angular/core'
import { Observable } from 'rxjs'
import { NotificationProps } from 'src/app/states/notification/notification.model'
import { NotificationQuery } from 'src/app/states/notification/notification.query'

@Component({
    selector: 'app-header-c',
    templateUrl: './header-c.component.html',
    styleUrls: ['./header-c.component.scss'],
})
export class HeaderCComponent implements OnInit {
    notifications$: Observable<NotificationProps[] | null | undefined> = this.notificationQuery.notifications$

    constructor(private readonly notificationQuery: NotificationQuery) {}

    ngOnInit(): void {}
}
