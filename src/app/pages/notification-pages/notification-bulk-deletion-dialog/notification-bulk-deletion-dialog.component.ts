import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { SocketService } from 'src/app/libs/socket/socket.service';
import { NotificationQuery } from 'src/app/states/notification/notification.query';

@Component({
    selector: 'app-notification-bulk-deletion-dialog',
    templateUrl: './notification-bulk-deletion-dialog.component.html',
    styleUrls: ['./notification-bulk-deletion-dialog.component.scss'],
})
export class NotificationBulkDeletionDialogComponent implements OnInit {
    constructor(
        private readonly dialog: MatDialog,
        private readonly notificationQuery: NotificationQuery,
        private readonly socket: SocketService
    ) {}

    ngOnInit(): void {}

    deleteNotifications(): void {
        this.notificationQuery.notificationAll.forEach((data) => {
            this.socket.notificationDecrease(data.id);
        });
        this.dialog.closeAll();
    }
}
