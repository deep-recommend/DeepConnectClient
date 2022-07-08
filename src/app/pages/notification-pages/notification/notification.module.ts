import { NgModule } from '@angular/core';

import { NotificationRoutingModule } from './notification-routing.module';
import { NotificationComponent } from './notification.component';
import { NotificationCComponent } from './notification-c/notification-c.component';
import { NotificationPComponent } from './notification-p/notification-p.component';
import { DeepRecommendSharedModule } from 'src/app/general/shared.module';
import { NoNotificationsPComponent } from './no-notifications-p/no-notifications-p.component';
import { NotificationBulkDeletionButtonPComponent } from './notification-bulk-deletion-button-p/notification-bulk-deletion-button-p.component';
import { NotificationResolverService } from './notification.resolver';
import { NotificationBulkDeletionDialogComponent } from '../notification-bulk-deletion-dialog/notification-bulk-deletion-dialog.component';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
    declarations: [
        NotificationComponent,
        NotificationCComponent,
        NotificationPComponent,
        NoNotificationsPComponent,
        NotificationBulkDeletionButtonPComponent,
        NotificationBulkDeletionDialogComponent,
    ],
    imports: [
        DeepRecommendSharedModule,
        NotificationRoutingModule,
        TranslateModule,
    ],
    providers: [NotificationResolverService],
})
export class NotificationModule {}
