import { Component, OnInit } from '@angular/core'
import { Observable } from 'rxjs'
import { NotificationProps, NotificationQuery } from 'src/app/states/notification'

@Component({
    selector: 'app-header-c',
    templateUrl: './header-c.component.html',
    styleUrls: ['./header-c.component.scss'],
})
export class HeaderCComponent implements OnInit {
    notifications$: Observable<NotificationProps[] | null> = this.notificationQuery.notifications$

    constructor(private readonly notificationQuery: NotificationQuery) {}

    ngOnInit(): void {}
}
