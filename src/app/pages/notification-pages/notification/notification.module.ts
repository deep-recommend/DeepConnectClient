import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NotificationRoutingModule } from './notification-routing.module';
import { NotificationComponent } from './notification.component';
import { NotificationCComponent } from './notification-c/notification-c.component';
import { NotificationPComponent } from './notification-p/notification-p.component';


@NgModule({
  declarations: [
    NotificationComponent,
    NotificationCComponent,
    NotificationPComponent
  ],
  imports: [
    CommonModule,
    NotificationRoutingModule
  ]
})
export class NotificationModule { }
