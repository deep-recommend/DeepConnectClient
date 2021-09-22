import { Injectable } from '@angular/core'
import { QueryEntity } from '@datorama/akita'
import { NotificationProps } from './notification.model'
import { NotificationStore, NotificationState } from './notification.store'

@Injectable({ providedIn: 'root' })
export class NotificationQuery extends QueryEntity<NotificationState> {
    existsNotifications$ = this.select((state) => state.ui.existsNotifications)

    notifications$ = this.selectAll()

    constructor(protected store: NotificationStore) {
        super(store)
    }

    get notificationAll(): NotificationProps[] {
        return this.getAll()
    }
}
