import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { SocketService } from 'src/app/libs/socket/socket.service';
import { Observable } from 'rxjs';
import { RoomQuery } from 'src/app/states/room/room.query';
import { UserProps } from 'src/app/states/user/user.model';
import { UserQuery } from 'src/app/states/user/user.query';
import { UserStore } from 'src/app/states/user/user.store';
import {
    MessageProps,
    CreateMessageProps,
} from 'src/app/states/message/message.model';
import { MessageQuery } from 'src/app/states/message/message.query';
import { RoomProps } from '../../../../states/room/room.model';

@Component({
    selector: 'app-message-room-c',
    templateUrl: './message-room-c.component.html',
    styleUrls: ['./message-room-c.component.scss'],
})
export class MessageRoomCComponent {
    profile$: Observable<UserProps> = this.userQuery.profile$;
    messages$: Observable<MessageProps[]> = this.messageQuery.messages$;
    currentRoom$: Observable<RoomProps> = this.roomQuery.currentRoom$;
    currentRoomId$: Observable<number> = this.roomQuery.currentRoomId$;

    currentRoom: RoomProps = this.roomQuery.currentRoomGetter;
    profile: UserProps = this.userQuery.profileGetter;

    constructor(
        private readonly userQuery: UserQuery,
        private readonly roomQuery: RoomQuery,
        private readonly messageQuery: MessageQuery,
        private readonly router: Router,
        private readonly socket: SocketService,
        private readonly userStore: UserStore
    ) {}

    onReceivedSendMessage(message: string): void {
        this._setMessageSending(message);
    }

    onReceivedClickAccount(userId: number | undefined): void {
        this.userStore.updateUserId(Number(userId));
        this.router.navigate([`user-detail/${userId}`]);
    }

    onReceivedClickMyProfilePicture(): void {
        this.router.navigate(['my-page']);
    }

    onReceivedClickCompanionProfilePicture(userId: number): void {
        this.userStore.updateUserId(Number(userId));
        this.router.navigate([`user-detail/${userId}`]);
    }

    private _setMessageSending(message: string): void {
        const value: CreateMessageProps = {
            currentUserId: this.profile?.id,
            userId:
                this.currentRoom.userA === this.profile?.id
                    ? this.currentRoom.userB
                    : this.currentRoom.userA,
            roomId: this.roomQuery.currentRoomIdGetter,
            message: message,
        };
        this.socket.sendMessage(value);
    }
}
