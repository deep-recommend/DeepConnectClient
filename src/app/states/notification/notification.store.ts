import { Injectable } from '@angular/core'
import { EntityState, EntityStore, StoreConfig } from '@datorama/akita'
import { NotificationProps } from './notification.model'

export interface NotificationState extends EntityState<NotificationProps> {
    ui: {
        alert: string[]
    }
}

const initialState = {
    ui: {
        alert: [],
    },
}

@Injectable({ providedIn: 'root' })
@StoreConfig({
    name: 'notification',
})
export class NotificationStore extends EntityStore<NotificationState> {
    constructor() {
        super(initialState)
    }

    increaseAlert(): void {}

    decreaseAlert(): void {}
}
