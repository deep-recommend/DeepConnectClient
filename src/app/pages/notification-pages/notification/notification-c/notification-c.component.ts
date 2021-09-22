import { Component } from '@angular/core'
import { Router } from '@angular/router'
import { Observable } from 'rxjs'
import { SocketService } from 'src/app/libs/socket/socket.service'
import { NotificationProps } from 'src/app/states/notification/notification.model'
import { NotificationQuery } from 'src/app/states/notification/notification.query'
import { UserProps } from 'src/app/states/user/user.model'
import { UserQuery } from 'src/app/states/user/user.query'
import { UserStore } from 'src/app/states/user/user.store'
@Component({
    selector: 'app-notification-c',
    templateUrl: './notification-c.component.html',
    styleUrls: ['./notification-c.component.scss'],
})
export class NotificationCComponent {
    profile: UserProps = this.userQuery.profileGetter

    existsNotifications$: Observable<boolean> = this.notificationQuery.existsNotifications$
    notifications$: Observable<NotificationProps[]> = this.notificationQuery.notifications$

    constructor(
        private readonly notificationQuery: NotificationQuery,
        private readonly userQuery: UserQuery,
        private readonly socket: SocketService,
        private readonly router: Router,
        private readonly userStore: UserStore
    ) {}

    onReceivedClickNotificationsToUserDetail(data: {
        userId: number
        notificationId: number
        isMessage: boolean
    }): void {
        this.userStore.updateUserId(data.userId)
        this.socket.notificationDecrease(data.notificationId)

        if (data.isMessage) {
            this.router.navigate([`message-room/${data.userId}`])
        } else {
            this.router.navigate([`user-detail/${data.userId}`])
        }
    }
}
