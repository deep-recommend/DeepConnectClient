import { Component, OnInit } from '@angular/core'
import { Router } from '@angular/router'
import { AuthenticationService } from 'src/app/general/services/authentication.service'
import { companionIdKey } from 'src/app/general/utilities/local-strage'
import { EntryService } from 'src/app/states/entry'
import { CreateMessageProps, MessageQuery, MessageService } from 'src/app/states/message'
import { RoomQuery, RoomService, RoomStore } from 'src/app/states/room'
import { UserQuery, UserService } from 'src/app/states/user'
import { SocketEmitterService } from 'src/app/general/services/socket/socket-emitter.service'
import { SocketReceiverService } from 'src/app/general/services/socket/socket-receiver.service'

@Component({
    selector: 'app-message-room-c',
    templateUrl: './message-room-c.component.html',
    styleUrls: ['./message-room-c.component.scss'],
})
export class MessageRoomCComponent implements OnInit {
    profile$ = this.userQuery.profile$
    companion$ = this.userQuery.companion$
    isRoom$ = this.roomQuery.isRoom$
    messages$ = this.messageQuery.messages$
    currentRoomId$ = this.roomQuery.currentRoomId$

    profile = this.userQuery.profileGetter
    companion = this.userQuery.companionGetter

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
        private readonly socketEmitter: SocketEmitterService,
        private readonly socketReceiver: SocketReceiverService
    ) {}

    ngOnInit(): void {
        this.roomInitializer()
    }

    async roomInitializer(): Promise<void> {
        this.authService.getProfile().subscribe()
        this.userService.getCompanionRequest(String(localStorage.getItem(companionIdKey))).subscribe()

        const profileEntries = await this.entryService.getEntriesRequestByProfileNotObservable()
        const companionEntries = await this.entryService.getEntriesRequestByCompanionNotObservable()

        if (profileEntries.length === 0 || companionEntries.length === 0) {
            console.log('Create room')
            this.roomService.postRoomRequest().subscribe((roomData) => {
                const profileEntryValue = {
                    userId: this.profile.user._id,
                    roomId: roomData._id,
                }
                const companionEntryValue = {
                    userId: this.companion.id,
                    roomId: roomData._id,
                }
                this.entryService.postEntryRequest(profileEntryValue).subscribe()
                this.entryService.postEntryRequest(companionEntryValue).subscribe()
                this.roomStore.updateRoomToTrue()
                this.roomStore.updateCurrentRoomId(roomData._id)
                this.messageService.getMessagesRequest().subscribe()
                return
            })
        } else {
            console.log('Exist room')
            profileEntries.forEach((profileEntry) => {
                companionEntries.forEach((companionEntry) => {
                    if (profileEntry.roomId === companionEntry.roomId) {
                        this.roomStore.updateRoomToTrue()
                        this.roomStore.updateCurrentRoomId(profileEntry.roomId)
                        this.messageService.getMessagesRequest().subscribe()
                    }
                    return
                })
            })
        }
    }

    onReceivedSendMessage(message: string): void {
        const value: CreateMessageProps = {
            userId: this.profile.user._id,
            roomId: this.roomQuery.currentRoomIdGetter,
            message: message,
        }
        this.socketEmitter.emitAddMessage(value)
        this.socketReceiver.receiveAddMessage()
    }

    onReceivedClickAccount(userId: string | undefined): void {
        this.router.navigate([`user-detail/${userId}`])
    }
}
