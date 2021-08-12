import { NgModule } from '@angular/core'

import { NotificationRoutingModule } from './notification-routing.module'
import { NotificationComponent } from './notification.component'
import { NotificationCComponent } from './notification-c/notification-c.component'
import { NotificationPComponent } from './notification-p/notification-p.component'
import { DeepRecommendSharedModule } from 'src/app/general/shared.module'
import { NoNotificationsPComponent } from './no-notifications-p/no-notifications-p.component'
@NgModule({
    declarations: [NotificationComponent, NotificationCComponent, NotificationPComponent, NoNotificationsPComponent],
    imports: [DeepRecommendSharedModule, NotificationRoutingModule],
})
export class NotificationModule {}
