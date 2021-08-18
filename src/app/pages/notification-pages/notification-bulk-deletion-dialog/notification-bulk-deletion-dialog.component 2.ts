import { Component, OnDestroy, OnInit } from '@angular/core'
import { MatDialogRef } from '@angular/material/dialog'
import { Subscription } from 'rxjs'
import { SnackBarService } from 'src/app/general/services/snack-bar.service'
import { SocketService } from 'src/app/general/services/socket/socket.service'
import { NotificationQuery, NotificationService } from 'src/app/states/notification'

@Component({
    selector: 'app-notification-bulk-deletion-dialog',
    templateUrl: './notification-bulk-deletion-dialog.component.html',
    styleUrls: ['./notification-bulk-deletion-dialog.component.scss'],
})
export class NotificationBulkDeletionDialogComponent implements OnInit, OnDestroy {
    subscriptions: Subscription[] = []

    constructor(
        private readonly notificationService: NotificationService,
        private readonly notificationQuery: NotificationQuery,
        private readonly socket: SocketService,
        private readonly dialog: MatDialogRef<NotificationBulkDeletionDialogComponent>,
        private readonly snackBar: SnackBarService
    ) {}

    ngOnInit(): void {
        this.subscriptions.push(this.notificationService.getNotifications().subscribe())
    }

    ngOnDestroy(): void {
        this.subscriptions.forEach((sub) => sub.unsubscribe())
    }

    deleteNotificationAll(): void {
        this.dialog.close()

        this.notificationQuery.notificationAll.forEach((data) => {
            this.socket.notificationDecreaseWithoutReceive(data._id)
        })

        this.notificationService.getNotifications().subscribe(() => {
            this.snackBar.open('通知を削除しました')
        })
    }
}
