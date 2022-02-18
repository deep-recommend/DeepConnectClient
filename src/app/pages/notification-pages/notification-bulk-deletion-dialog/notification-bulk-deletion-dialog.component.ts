import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { SocketService } from 'src/app/libs/socket/socket.service';
import { NotificationQuery } from 'src/app/states/notification/notification.query';

@Component({
    selector: 'app-notification-bulk-deletion-dialog',
    templateUrl: './notification-bulk-deletion-dialog.component.html',
    styleUrls: ['./notification-bulk-deletion-dialog.component.scss'],
})
export class NotificationBulkDeletionDialogComponent {
    constructor(
        private readonly dialog: MatDialog,
        private readonly notificationQuery: NotificationQuery,
        private readonly socket: SocketService
    ) {}

    deleteNotifications(): void {
        const ids = this.notificationQuery.notificationAll.map((notification) => notification.id);
        this.socket.notificationDecrease(ids);
        this.dialog.closeAll();
    }
}
