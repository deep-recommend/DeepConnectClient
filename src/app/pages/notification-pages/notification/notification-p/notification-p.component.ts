import {
    ChangeDetectionStrategy,
    Component,
    EventEmitter,
    Input,
    OnInit,
    Output,
} from '@angular/core';
import { NotificationProps } from 'src/app/states/notification/notification.model';
import { UserQuery } from 'src/app/states/user/user.query';

@Component({
    selector: 'app-notification-p',
    templateUrl: './notification-p.component.html',
    styleUrls: ['./notification-p.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NotificationPComponent implements OnInit {
    @Input() notifications!: NotificationProps[] | null;
    @Output() clickNotificationsToUserDetail: EventEmitter<{
        userId: number;
        notificationId: number;
        isMessage: boolean;
    }> = new EventEmitter<{
        userId: number;
        notificationId: number;
        isMessage: boolean;
    }>();

    constructor(private readonly userQuery: UserQuery) {}

    ngOnInit(): void {}

    onClickNotificationsToUserDetail(
        userId: number,
        notificationId: number,
        isMessage: boolean
    ): void {
        const emitValue = {
            userId: userId,
            notificationId: notificationId,
            isMessage: isMessage,
        };
        this.clickNotificationsToUserDetail.emit(emitValue);
    }

    getMessage(notification: NotificationProps): string {
        const user = this.userQuery.getById(notification.currentUserId);
        return (
            `${user?.realLastName}${user?.realFirstName}` + notification.message
        );
    }

    getProfilePicture(userId: number) {
        const user = this.userQuery.getById(userId);
        return user ? user?.profilePicture : undefined;
    }
}
