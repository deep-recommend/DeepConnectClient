import { Component, Input, OnInit } from '@angular/core'
import { NotificationProps } from 'src/app/states/notification'

@Component({
    selector: 'app-no-notifications-p',
    templateUrl: './no-notifications-p.component.html',
    styleUrls: ['./no-notifications-p.component.scss'],
})
export class NoNotificationsPComponent implements OnInit {
    constructor() {}

    ngOnInit(): void {}
}
