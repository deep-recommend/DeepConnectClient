import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/general/services/authentication.service';
import { EntryQuery, EntryService } from 'src/app/states/entry';
import { CreateMessageProps, MessageQuery, MessageService } from 'src/app/states/message';
import { RoomQuery, RoomService, RoomStore } from 'src/app/states/room';
import { UserQuery } from 'src/app/states/user';

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

    profile = this.userQuery.profileGetter;
    companion = this.userQuery.companionGetter;

    constructor(
        private readonly userQuery: UserQuery,
        private readonly entryService: EntryService,
        private readonly roomService: RoomService,
        private readonly authService: AuthenticationService,
        private readonly roomStore: RoomStore,
        private readonly roomQuery: RoomQuery,
        private readonly entryQuery: EntryQuery,
        private readonly messageService: MessageService,
        private readonly messageQuery: MessageQuery
    ) {}

    ngOnInit(): void {
        this.roomInitializer();
    }

    roomInitializer(): void {
        this.authService.getProfile().subscribe();
        this.entryService.getEntriesRequestByCompanion().subscribe();
        this.entryService.getEntriesRequestByProfile().subscribe();
        const profileEntries = this.entryQuery.profileEntriesGetter;
        const companionEntries = this.entryQuery.companionEntriesGetter;
        console.log('profileEntries', profileEntries);
        console.log('companionEntries', companionEntries);
        if (profileEntries.length === 0 || companionEntries.length === 0) {
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
        } else if (profileEntries === undefined || companionEntries === undefined) {
            this.roomStore.updateRoomIsFalse();
        } else {
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
        console.log();
        const value: CreateMessageProps = {
            userId: this.profile.user._id,
            roomId: this.roomQuery.currentRoomIdGetter,
            message: message,
        };
        console.log(value);
        this.messageService.postMessageRequest(value).subscribe();
    }
}
