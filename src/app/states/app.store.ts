import { Injectable } from '@angular/core';
import { blocksStore } from './block';
import { filtersStore } from './filter';
import { LikeStore } from './like/like.store';
import { MessageStore } from './message/message.store';
import { NotificationStore } from './notification/notification.store';
import { RoomStore } from './room/room.store';
import { UiStore } from './ui/ui.store';
import { UserStore } from './user/user.store';

@Injectable({ providedIn: 'root' })
export class AppStore {
    readonly block = blocksStore;
    readonly filter = filtersStore;

    constructor(
        readonly like: LikeStore,
        readonly message: MessageStore,
        readonly notification: NotificationStore,
        readonly room: RoomStore,
        readonly ui: UiStore,
        readonly user: UserStore
    ) {}
}
