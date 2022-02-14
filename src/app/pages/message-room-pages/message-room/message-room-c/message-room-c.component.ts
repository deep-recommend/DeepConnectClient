import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { SocketService } from 'src/app/libs/socket/socket.service';
import { Observable } from 'rxjs';
import { RoomQuery } from 'src/app/states/room/room.query';
import { UiStore } from 'src/app/states/ui/ui.store';
import { UserProps } from 'src/app/states/user/user.model';
import { UserQuery } from 'src/app/states/user/user.query';
import { UserStore } from 'src/app/states/user/user.store';
import {
    MessageProps,
    CreateMessageProps,
} from 'src/app/states/message/message.model';
import { MessageQuery } from 'src/app/states/message/message.query';

@Component({
    selector: 'app-message-room-c',
    templateUrl: './message-room-c.component.html',
    styleUrls: ['./message-room-c.component.scss'],
})
export class MessageRoomCComponent {
    profile$: Observable<UserProps> = this.userQuery.profile$;
    companion$: Observable<UserProps> = this.userQuery.companion$;
    isRoom$: Observable<boolean> = this.roomQuery.isRoom$;
    messages$: Observable<MessageProps[]> = this.messageQuery.messages$;
    currentRoomId$: Observable<number> = this.roomQuery.currentRoomId$;

    profile = this.userQuery.profileGetter;
    companion = this.userQuery.companionGetter;

    constructor(
        private readonly userQuery: UserQuery,
        private readonly roomQuery: RoomQuery,
        private readonly messageQuery: MessageQuery,
        private readonly router: Router,
        private readonly socket: SocketService,
        private readonly userStore: UserStore,
        private readonly uiStore: UiStore
    ) {}

    onReceivedSendMessage(message: string): void {
        this._setMessageSending(message);
        this._setNotificationIncrease();
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
            userId: this.profile.id,
            roomId: this.roomQuery.currentRoomIdGetter,
            message: message,
        };
        this.socket.sendMessage(value);
    }

    private _setNotificationIncrease(): void {
        const value = {
            isMessage: true,
            currentUserId: this.profile.id,
            userId: this.companion.id,
        };
        this.socket.notificationIncrease(value);
    }
}
