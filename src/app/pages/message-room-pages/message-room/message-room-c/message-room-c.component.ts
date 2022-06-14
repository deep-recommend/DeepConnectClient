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
import { Menu } from 'src/app/general/interfaces/menu.interface';

@Component({
    selector: 'app-message-room-c',
    templateUrl: './message-room-c.component.html',
    styleUrls: ['./message-room-c.component.scss'],
})
export class MessageRoomCComponent {
    menus: Menu[] = [
        {
            icon: 'person_off',
            description: '表示しない',
            clickCallBack: () => {
                this.socket.filter({
                    userId: this.profile.id,
                    filterUserId: Number(this.userId),
                });
                this.router.navigate(['matching-users']);
            },
        },
        {
            icon: 'block',
            description: 'ブロックする',
            clickCallBack: () => {
                this.socket.block({
                    userId: this.profile.id,
                    blockUserId: Number(this.userId),
                });
                this.router.navigate(['matching-users']);
            },
        },
    ];

    profile$: Observable<UserProps> = this.userQuery.profile$;
    messages$: Observable<MessageProps[]> = this.messageQuery.messages$;
    currentRoom$: Observable<RoomProps> = this.roomQuery.currentRoom$;
    currentRoomId$: Observable<number> = this.roomQuery.currentRoomId$;

    newMessage: string = '';
    currentRoom: RoomProps = this.roomQuery.currentRoom;
    profile: UserProps = this.userQuery.profileGetter;

    get userId(): number {
        return this.currentRoom.userA === this.profile?.id
            ? this.currentRoom.userB
            : this.currentRoom.userA;
    }

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
        // TODO: url対応
        // this.replaceMessage(message);
        const value: CreateMessageProps = {
            currentUserId: this.profile?.id,
            userId: this.userId,
            roomId: this.roomQuery.currentRoomId,
            message: message,
        };
        this.socket.sendMessage(value);
    }

    private replaceMessage(message: string): void {
        const _replaceMessage = (message: string) => {
            const regexp =
                /https?:\/\/[-_.!~*\'()a-zA-Z0-9;\/?:\@&=+\$,%#\u3000-\u30FE\u4E00-\u9FA0\uFF01-\uFFE3]+/g;
            const result = regexp.exec(message);
            if (result) {
                this.newMessage = this.newMessage.replace(
                    result[0],
                    `<a href="${result[0]}" target="_blank" rel="noopener noreferrer">${result[0]}</a>`
                );
            }
        };

        this.newMessage = message;
        _replaceMessage(this.newMessage);
    }
}
