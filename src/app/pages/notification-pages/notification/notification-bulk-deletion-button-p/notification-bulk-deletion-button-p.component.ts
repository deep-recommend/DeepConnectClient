import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core'
import { MatDialog } from '@angular/material/dialog'
import { NotificationBulkDeletionDialogComponent } from '../../notification-bulk-deletion-dialog/notification-bulk-deletion-dialog.component'

@Component({
    selector: 'app-notification-bulk-deletion-button-p',
    templateUrl: './notification-bulk-deletion-button-p.component.html',
    styleUrls: ['./notification-bulk-deletion-button-p.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NotificationBulkDeletionButtonPComponent implements OnInit {
    constructor(private readonly dialog: MatDialog) {}

    ngOnInit(): void {}

    openDialogBulkDeletion(): void {
        this.dialog.open(NotificationBulkDeletionDialogComponent)
    }
}
