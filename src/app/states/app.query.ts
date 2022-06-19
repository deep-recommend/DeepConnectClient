import { Injectable } from '@angular/core';
import { LikeQuery } from './like/like.query';
import { MessageQuery } from './message/message.query';
import { NotificationQuery } from './notification/notification.query';
import { RoomQuery } from './room/room.query';
import { UiQuery } from './ui/ui.query';
import { UserQuery } from './user/user.query';

@Injectable({ providedIn: 'root' })
export class AppQuery {
    constructor(
        readonly like: LikeQuery,
        readonly message: MessageQuery,
        readonly notification: NotificationQuery,
        readonly room: RoomQuery,
        readonly ui: UiQuery,
        readonly user: UserQuery
    ) {}
}
