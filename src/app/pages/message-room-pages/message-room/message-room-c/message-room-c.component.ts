import { Component, OnInit, OnDestroy } from '@angular/core'
import { Router } from '@angular/router'
import { AuthenticationService } from 'src/app/general/services/authentication.service'
import { userIdKey } from 'src/app/general/utilities/local-strage'
import { EntryService } from 'src/app/states/entry'
import { CreateMessageProps, MessageQuery, MessageService } from 'src/app/states/message'
import { RoomQuery, RoomService, RoomStore } from 'src/app/states/room'
import { UserQuery, UserService, UserStore } from 'src/app/states/user'
import { SocketService } from 'src/app/general/services/socket/socket.service'
import { Subscription } from 'rxjs'
import { UiStore } from 'src/app/states/ui'

@Component({
    selector: 'app-message-room-c',
    templateUrl: './message-room-c.component.html',
    styleUrls: ['./message-room-c.component.scss'],
})
export class MessageRoomCComponent implements OnInit, OnDestroy {
    pageName: string | null | undefined

    subscriptions: Subscription[] = []

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
        private readonly socket: SocketService,
        private readonly userStore: UserStore,
        private readonly uiStore: UiStore
    ) {}

    async ngOnInit(): Promise<void> {
        this.pageName = 'メッセージ中'
        this.uiStore.hideRoutingTab()
        await this.roomInitializer()
    }

    async roomInitializer(): Promise<void> {
        this.subscriptions.push(this.authService.getProfile().subscribe())
        const companionId = this.userQuery.userIdGetter
        if (companionId) {
            this.subscriptions.push(this.userService.getCompanionRequest(companionId).subscribe())
        } else {
            this.subscriptions.push(
                this.userService.getCompanionRequest(String(localStorage.getItem(userIdKey))).subscribe()
            )
        }

        const profileEntries = await this.entryService.getEntriesRequestByProfileNotObservable()
        const companionEntries = await this.entryService.getEntriesRequestByCompanionNotObservable()

        if (profileEntries.length === 0 || companionEntries.length === 0) {
            console.log('Create room')
            this.subscriptions.push(
                this.roomService.postRoomRequest().subscribe((roomData) => {
                    const profileEntryValue = {
                        userId: this.profile._id,
                        roomId: roomData._id,
                    }
                    const companionEntryValue = {
                        userId: this.companion._id,
                        roomId: roomData._id,
                    }
                    this.subscriptions.push(this.entryService.postEntryRequest(profileEntryValue).subscribe())
                    this.subscriptions.push(this.entryService.postEntryRequest(companionEntryValue).subscribe())
                    this.roomStore.updateRoomToTrue()
                    this.roomStore.updateCurrentRoomId(roomData._id)
                    this.subscriptions.push(this.messageService.getMessagesRequest().subscribe())
                    return
                })
            )
        } else {
            console.log('Exist room')
            profileEntries.forEach((profileEntry) => {
                companionEntries.forEach((companionEntry) => {
                    if (profileEntry.roomId === companionEntry.roomId) {
                        this.roomStore.updateRoomToTrue()
                        this.roomStore.updateCurrentRoomId(profileEntry.roomId)
                        this.subscriptions.push(this.messageService.getMessagesRequest().subscribe())
                    }
                    return
                })
            })
        }
    }

    ngOnDestroy(): void {
        this.subscriptions.forEach((sub) => sub.unsubscribe())
    }

    onReceivedSendMessage(message: string): void {
        this._setMessageSending(message)
        this._setNotificationIncrease()
    }

    onReceivedClickAccount(userId: string | undefined): void {
        this.userStore.updateUserId(String(userId))
        this.router.navigate([`user-detail/${userId}`])
    }

    onReceivedClickMyProfilePicture(): void {
        this.router.navigate(['my-page'])
    }

    onReceivedClickCompanionProfilePicture(userId: string | undefined): void {
        this.userStore.updateUserId(String(userId))
        this.router.navigate([`user-detail/${userId}`])
    }

    private _setMessageSending(message: string): void {
        const value: CreateMessageProps = {
            userId: this.profile._id,
            roomId: this.roomQuery.currentRoomIdGetter,
            message: message,
        }
        this.socket.sendMessage(value)
    }

    private _setNotificationIncrease(): void {
        const value = {
            isMessage: true,
            currentUserId: this.profile._id,
            userId: this.companion._id,
        }
        this.socket.notificationIncrease(value)
    }
}
