import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { SocketService } from 'src/app/libs/socket/socket.service';
import { Observable } from 'rxjs';
import { UserProps } from 'src/app/states/user/user.model';
import {
    MessageProps,
    CreateMessageProps,
} from 'src/app/states/message/message.model';
import { RoomProps } from '../../../../states/room/room.model';
import { Menu } from 'src/app/general/interfaces/menu.interface';
import { RoomService } from '../../../../states/room/room.service';
import { SnackBarService } from '../../../../general/services/snack-bar.service';
import { AppQuery } from '../../../../states/app.query';
import { AppStore } from '../../../../states/app.store';

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
                this.roomService.getRoomsRequest().subscribe(() => {
                    this.router.navigate(['matching-users']);
                    this.snackBar.open('非表示にしました');
                });
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
                this.roomService.getRoomsRequest().subscribe(() => {
                    this.router.navigate(['matching-users']);
                    this.snackBar.open('ブロックしました');
                });
            },
        },
    ];

    profile$: Observable<UserProps> = this.query.user.profile$;
    messages$: Observable<MessageProps[]> = this.query.message.messages$;
    currentRoom$: Observable<RoomProps> = this.query.room.currentRoom$;
    currentRoomId$: Observable<number> = this.query.room.currentRoomId$;

    newMessage: string = '';
    currentRoom: RoomProps = this.query.room.currentRoom;
    profile: UserProps = this.query.user.profileGetter;

    get userId(): number {
        return this.currentRoom.userA === this.profile?.id
            ? this.currentRoom.userB
            : this.currentRoom.userA;
    }

    constructor(
        private readonly router: Router,
        private readonly socket: SocketService,
        private readonly store: AppStore,
        private readonly roomService: RoomService,
        private readonly snackBar: SnackBarService,
        private readonly query: AppQuery
    ) {}

    onReceivedSendMessage(message: string): void {
        this._setMessageSending(message);
    }

    onReceivedClickAccount(userId: number | undefined): void {
        this.store.user.updateUserId(Number(userId));
        this.router.navigate([`user-detail/${userId}`]);
    }

    onReceivedClickMyProfilePicture(): void {
        this.router.navigate(['my-page']);
    }

    onReceivedClickCompanionProfilePicture(userId: number): void {
        this.store.user.updateUserId(Number(userId));
        this.router.navigate([`user-detail/${userId}`]);
    }

    private _setMessageSending(message: string): void {
        this.replaceMessage(message);
        const value: CreateMessageProps = {
            currentUserId: this.profile?.id,
            userId: this.userId,
            roomId: this.query.room.currentRoomId,
            message: this.newMessage,
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
