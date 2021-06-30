import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/general/services/authentication.service';
import { companionIdKey } from 'src/app/general/utilities/local-strage';
import { HALF_WIDTH_ALPHA_NUM_REGEX } from 'src/app/general/utilities/regex';
import { EntryQuery, EntryService } from 'src/app/states/entry';
import { CreateMessageProps, MessageQuery, MessageService } from 'src/app/states/message';
import { RoomQuery, RoomService, RoomStore } from 'src/app/states/room';
import { UserQuery, UserService } from 'src/app/states/user';

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
        private readonly userService: UserService,
        private readonly entryService: EntryService,
        private readonly entryQuery: EntryQuery,
        private readonly roomService: RoomService,
        private readonly authService: AuthenticationService,
        private readonly roomStore: RoomStore,
        private readonly roomQuery: RoomQuery,
        private readonly messageService: MessageService,
        private readonly messageQuery: MessageQuery
    ) {}

    ngOnInit(): void {
        this.roomInitializer();
    }

    async roomInitializer(): Promise<void> {
        this.authService.getProfile().subscribe();
        this.userService.getCompanionRequest(String(localStorage.getItem(companionIdKey))).subscribe();

        const profileEntries = await this.entryService.getEntriesRequestByProfileNotObservable();
        const companionEntries = await this.entryService.getEntriesRequestByCompanionNotObservable();

        console.log('profileEntries', profileEntries);
        console.log('companionEntries', companionEntries);

        if (profileEntries.length === 0 || companionEntries.length === 0) {
            console.log('then');
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
            console.log('else');
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
        this.messageService.postMessageRequest(value).subscribe(() => {
            this.messageService.getMessagesRequest().subscribe();
        });
    }
}
