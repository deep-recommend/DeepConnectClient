import { Injectable } from '@angular/core';
import { EntityState, EntityStore, StoreConfig } from '@datorama/akita';
import { NotificationProps } from './notification.model';

export interface NotificationState extends EntityState<NotificationProps> {
    ui: {
        existsNotifications: boolean;
    };
}

const initialState = {
    ui: {
        existsNotifications: Boolean(),
    },
};

@Injectable({ providedIn: 'root' })
@StoreConfig({
    name: 'notification',
})
export class NotificationStore extends EntityStore<NotificationState> {
    constructor() {
        super(initialState);
    }

    setNotification(notifications: NotificationProps[]): void {
        this.set(notifications);
    }

    updateExistsNotifications(bool: boolean): void {
        this.update({
            ui: {
                ...this.getValue().ui,
                existsNotifications: bool,
            },
        });
    }
}
