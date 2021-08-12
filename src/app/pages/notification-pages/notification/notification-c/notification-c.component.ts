import { Component, OnDestroy, OnInit } from '@angular/core'
import { Router } from '@angular/router'
import { Observable, Subscription } from 'rxjs'
import { SocketService } from 'src/app/general/services/socket/socket.service'
import { NotificationProps, NotificationQuery, NotificationService } from 'src/app/states/notification'
import { UserQuery, UserStore } from 'src/app/states/user'
import { UserProps } from 'src/app/states/user'
@Component({
    selector: 'app-notification-c',
    templateUrl: './notification-c.component.html',
    styleUrls: ['./notification-c.component.scss'],
})
export class NotificationCComponent implements OnInit, OnDestroy {
    pageName: string | null | undefined
    existsNotifications: boolean = true

    profile: UserProps = this.userQuery.profileGetter

    subscriptions: Subscription[] = []

    notifications$: Observable<NotificationProps[] | null> = this.notificationQuery.notifications$

    constructor(
        private readonly notificationService: NotificationService,
        private readonly notificationQuery: NotificationQuery,
        private readonly userQuery: UserQuery,
        private readonly socket: SocketService,
        private readonly router: Router,
        private readonly userStore: UserStore
    ) {}

    ngOnInit(): void {
        this.pageName = '通知'
        this.subscriptions.push(this.notificationService.getNotifications().subscribe())
        this.subscriptions.push(
            this.notifications$.subscribe((data) => {
                this.existsNotifications = data?.length !== 0
            })
        )
    }

    ngOnDestroy(): void {
        this.subscriptions.forEach((sub) => sub.unsubscribe())
    }

    onReceivedClickNotificationsToUserDetail(data: {
        userId: string
        notificationId: string
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
