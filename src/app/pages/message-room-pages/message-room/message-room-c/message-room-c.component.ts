import { Component, OnInit, OnDestroy } from '@angular/core'
import { Router } from '@angular/router'
import { AuthenticationService } from 'src/app/general/services/authentication.service'
import { userIdKey } from 'src/app/general/utilities/local-strage'
import { SocketService } from 'src/app/libs/socket/socket.service'
import { Observable, Subscription } from 'rxjs'
import { ProgressSpinnerService } from 'src/app/general/components/progress-spinner/progress-spinner.service'
import { EntryService } from 'src/app/states/entry/entry.service'
import { RoomQuery } from 'src/app/states/room/room.query'
import { RoomService } from 'src/app/states/room/room.service'
import { RoomStore } from 'src/app/states/room/room.store'
import { UiStore } from 'src/app/states/ui/ui.store'
import { UserProps } from 'src/app/states/user/user.model'
import { UserQuery } from 'src/app/states/user/user.query'
import { UserService } from 'src/app/states/user/user.service'
import { UserStore } from 'src/app/states/user/user.store'
import { MessageProps, CreateMessageProps } from 'src/app/states/message/message.model'
import { MessageQuery } from 'src/app/states/message/message.query'
import { MessageService } from 'src/app/states/message/message.service'

@Component({
    selector: 'app-message-room-c',
    templateUrl: './message-room-c.component.html',
    styleUrls: ['./message-room-c.component.scss'],
})
export class MessageRoomCComponent implements OnInit, OnDestroy {
    subscriptions: Subscription[] = []

    profile$: Observable<UserProps> = this.userQuery.profile$
    companion$: Observable<UserProps> = this.userQuery.companion$
    isRoom$: Observable<boolean> = this.roomQuery.isRoom$
    messages$: Observable<MessageProps[]> = this.messageQuery.messages$
    currentRoomId$: Observable<number> = this.roomQuery.currentRoomId$

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
        private readonly uiStore: UiStore,
        private readonly spinner: ProgressSpinnerService
    ) {}

    async ngOnInit(): Promise<void> {
        this.uiStore.hideRoutingTab()
        await this.roomInitializer()
        this.spinner.close()
    }

    async roomInitializer(): Promise<void> {
        this.subscriptions.push(this.authService.getProfile().subscribe())
        const companionId = this.userQuery.userIdGetter
        if (companionId) {
            this.subscriptions.push(this.userService.getCompanionRequest(companionId).subscribe())
        } else {
            this.subscriptions.push(
                this.userService.getCompanionRequest(Number(localStorage.getItem(userIdKey))).subscribe()
            )
        }

        const profileEntries = await this.entryService.getEntriesRequestByProfileNotObservable()
        const companionEntries = await this.entryService.getEntriesRequestByCompanionNotObservable()

        if (profileEntries.length === 0 || companionEntries.length === 0) {
            console.log('Create room')
            this.subscriptions.push(
                this.roomService.postRoomRequest().subscribe((roomData) => {
                    const profileEntryValue = {
                        userId: this.profile.id,
                        roomId: roomData.id,
                    }
                    const companionEntryValue = {
                        userId: this.companion.id,
                        roomId: roomData.id,
                    }
                    this.subscriptions.push(this.entryService.postEntryRequest(profileEntryValue).subscribe())
                    this.subscriptions.push(this.entryService.postEntryRequest(companionEntryValue).subscribe())
                    this.roomStore.updateRoomToTrue()
                    this.roomStore.updateCurrentRoomId(roomData.id)
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

    onReceivedClickAccount(userId: number | undefined): void {
        this.uiStore.displayRoutingTab()
        this.userStore.updateUserId(Number(userId))
        this.router.navigate([`user-detail/${userId}`])
    }

    onReceivedClickMyProfilePicture(): void {
        this.router.navigate(['my-page'])
    }

    onReceivedClickCompanionProfilePicture(userId: number): void {
        this.userStore.updateUserId(Number(userId))
        this.router.navigate([`user-detail/${userId}`])
    }

    private _setMessageSending(message: string): void {
        const value: CreateMessageProps = {
            userId: this.profile.id,
            roomId: this.roomQuery.currentRoomIdGetter,
            message: message,
        }
        this.socket.sendMessage(value)
    }

    private _setNotificationIncrease(): void {
        const value = {
            isMessage: true,
            currentUserId: this.profile.id,
            userId: this.companion.id,
        }
        this.socket.notificationIncrease(value)
    }
}
