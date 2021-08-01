import { Injectable } from '@angular/core';
import { NgEntityService } from '@datorama/akita-ng-entity-service';
import { NotificationStore, NotificationState } from './notification.store';

@Injectable({ providedIn: 'root' })
export class NotificationService extends NgEntityService<NotificationState> {

  constructor(protected store: NotificationStore) {
    super(store);
  }

}
