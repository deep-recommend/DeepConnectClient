import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/general/services/authentication.service';
import { companionIdKey } from 'src/app/general/utilities/local-strage';
import { EntryService } from 'src/app/states/entry';
import { CreateMessageProps, MessageQuery, MessageService, MessageStore } from 'src/app/states/message';
import { RoomQuery, RoomService, RoomStore } from 'src/app/states/room';
import { UserQuery, UserService } from 'src/app/states/user';
import { EmitterService } from 'src/app/general/services/socket/socket-emitter.service';
import { ReceiverService } from 'src/app/general/services/socket/socket-receiver.service';

@Component({
    selector: 'app-message-room-c',
    templateUrl: './message-room-c.component.html',
    styleUrls: ['./message-room-c.component.scss'],
})
export class MessageRoomCComponent implements OnInit {
    profile$ = this.userQuery.profile$;
    companion$ = this.userQuery.companion$;
    isRoom$ = this.roomQuery.isRoom$;
    messages$ = this.messageQuery.messages$;
    currentRoomId$ = this.roomQuery.currentRoomId$;

    profile = this.userQuery.profileGetter;
    companion = this.userQuery.companionGetter;

    constructor(
        private readonly userQuery: UserQuery,
        private readonly userService: UserService,
        private readonly entryService: EntryService,
        private readonly roomService: RoomService,
        private readonly authService: AuthenticationService,
        private readonly roomStore: RoomStore,
        private readonly roomQuery: RoomQuery,
        private readonly messageService: MessageService,
        private readonly messageQuery: MessageQuery,
        private readonly router: Router,
        private readonly emitter: EmitterService,
        private readonly receiver: ReceiverService,
        private readonly messageStore: MessageStore
    ) {}

    ngOnInit(): void {
        this.roomInitializer();
        this.messages$.subscribe(console.log);
    }

    async roomInitializer(): Promise<void> {
        this.authService.getProfile().subscribe();
        this.userService.getCompanionRequest(String(localStorage.getItem(companionIdKey))).subscribe();

        const profileEntries = await this.entryService.getEntriesRequestByProfileNotObservable();
        const companionEntries = await this.entryService.getEntriesRequestByCompanionNotObservable();

        console.log('profileEntries', profileEntries);
        console.log('companionEntries', companionEntries);

        if (profileEntries.length === 0 || companionEntries.length === 0) {
            console.log('Create room');
            this.roomService.postRoomRequest().subscribe((roomData) => {
                const profileEntryValue = {
                    userId: this.profile.user._id,
                    roomId: roomData._id,
                };
                const companionEntryValue = {
                    userId: this.companion.id,
                    roomId: roomData._id,
                };
                this.entryService.postEntryRequest(profileEntryValue).subscribe();
                this.entryService.postEntryRequest(companionEntryValue).subscribe();
                this.roomStore.updateRoomIsTrue();
                this.roomStore.updateCurrentRoomId(roomData._id);
                this.messageService.getMessagesRequest().subscribe();
                return;
            });
        } else {
            console.log('Exist room');
            profileEntries.forEach((profileEntry) => {
                companionEntries.forEach((companionEntry) => {
                    if (profileEntry.roomId === companionEntry.roomId) {
                        this.roomStore.updateRoomIsTrue();
                        this.roomStore.updateCurrentRoomId(profileEntry.roomId);
                        this.messageService.getMessagesRequest().subscribe();
                    }
                    return;
                });
            });
        }
    }

    onReceivedSendMessage(message: string): void {
        const value: CreateMessageProps = {
            userId: this.profile.user._id,
            roomId: this.roomQuery.currentRoomIdGetter,
            message: message,
        };
        this.emitter.emitMessage(value);
        this.receiver.receiveMessage().subscribe(data => {
            console.warn('data',data)
            this.messageService.getMessagesRequest().subscribe()
        })

        this.emitter.sendMessage(value)
        this.receiver.getMessage().pipe(
        ).subscribe(data => {
            console.warn('data', data)
            this.messageService.getMessagesRequest().subscribe()
        })
        this.messageService.getMessagesRequest().subscribe(data => {
            console.warn(data)
        })
        // this.messageService.postMessageRequest(value).subscribe(() => {
        //     this.messageService.getMessagesRequest().subscribe();
        // });
    }

    onReceivedClickAccount(userId: string | undefined): void {
        this.router.navigate([`user-detail/${userId}`]);
    }
}
