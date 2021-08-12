import { Injectable } from '@angular/core'
import { EntityState, EntityStore, StoreConfig } from '@datorama/akita'
import { NotificationProps } from './notification.model'

export interface NotificationState extends EntityState<NotificationProps> {
    ui: {}
}

const initialState = {
    ui: {},
}

@Injectable({ providedIn: 'root' })
@StoreConfig({
    name: 'notification',
    idKey: '_id',
})
export class NotificationStore extends EntityStore<NotificationState> {
    constructor() {
        super(initialState)
    }

    setNotification(notifications: NotificationProps[]): void {
        this.set(notifications)
    }
}
