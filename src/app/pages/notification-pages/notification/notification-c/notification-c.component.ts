import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { NotificationProps } from 'src/app/states/notification/notification.model';
import { UserProps } from 'src/app/states/user/user.model';
import { SocketEmitterService } from '../../../../libs/socket/socket-emitter.service';
import { AppQuery } from '../../../../states/app.query';
import { AppStore } from '../../../../states/app.store';

@Component({
    selector: 'app-notification-c',
    templateUrl: './notification-c.component.html',
    styleUrls: ['./notification-c.component.scss'],
})
export class NotificationCComponent {
    profile: UserProps = this.query.user.profileGetter;

    isMobile$: Observable<boolean> = this.query.ui.isMobile$;
    existsNotifications$: Observable<boolean> =
        this.query.notification.existsNotifications$;
    notifications$: Observable<NotificationProps[]> =
        this.query.notification.notifications$;

    constructor(
        private readonly router: Router,
        private readonly store: AppStore,
        private readonly socketEmitter: SocketEmitterService,
        private readonly query: AppQuery
    ) {}

    onReceivedClickNotificationsToUserDetail(data: {
        userId: number;
        notificationId: number;
        isMessage: boolean;
    }): void {
        this.store.user.updateUserId(data.userId);
        this.socketEmitter.emitNotificationDecrease([data.notificationId]);

        const room = this.query.room.getByUserId(
            this.query.user.profileGetter.id,
            data.userId
        );

        data.isMessage
            ? this.router.navigate([`message-room/${room?.id}`])
            : this.router.navigate([`user-detail/${data.userId}`]);
    }
}
