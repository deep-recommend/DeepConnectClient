import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core'
import { NotificationProps } from 'src/app/states/notification'
import { UserProps, UserQuery } from 'src/app/states/user'

@Component({
    selector: 'app-notification-p',
    templateUrl: './notification-p.component.html',
    styleUrls: ['./notification-p.component.scss'],
})
export class NotificationPComponent implements OnInit {
    @Input() notifications!: NotificationProps[] | null
    @Output() clickNotificationsToUserDetail: EventEmitter<{
        userId: string
        notificationId: string
        isMessage: boolean
    }> = new EventEmitter<{ userId: string; notificationId: string; isMessage: boolean }>()

    constructor(private readonly userQuery: UserQuery) {}

    ngOnInit(): void {}

    onClickNotificationsToUserDetail(userId: string, notificationId: string, isMessage: boolean): void {
        const emitValue = {
            userId: userId,
            notificationId: notificationId,
            isMessage: isMessage,
        }
        this.clickNotificationsToUserDetail.emit(emitValue)
    }

    getUserName(userId: string): string | undefined {
        const user = this.userQuery.getUserById(userId)
        return user ? `${user?.realLastName}${user?.realFirstName}` : undefined
    }
}
