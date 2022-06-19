import { Injectable } from '@angular/core';
import { AuthenticationService } from '../general/services/authentication.service';
import { BlockService } from './block';
import { FilterService } from './filter';
import { LikeService } from './like/like.service';
import { MessageService } from './message/message.service';
import { NotificationService } from './notification/notification.service';
import { RoomService } from './room/room.service';
import { UiService } from './ui/ui.service';
import { UserService } from './user/user.service';

@Injectable({ providedIn: 'root' })
export class AppService {
    constructor(
        readonly like: LikeService,
        readonly message: MessageService,
        readonly notification: NotificationService,
        readonly room: RoomService,
        readonly ui: UiService,
        readonly user: UserService,
        readonly auth: AuthenticationService,
        readonly block: BlockService,
        readonly filter: FilterService
    ) {}
}
