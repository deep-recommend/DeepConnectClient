import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core'
import { relativeTime } from 'src/app/general/functions/moment'
import { MessageProps } from 'src/app/states/message'
import { UserProps } from 'src/app/states/user'
@Component({
    selector: 'app-message-room-screen-p',
    templateUrl: './message-room-screen-p.component.html',
    styleUrls: ['./message-room-screen-p.component.scss'],
})
export class MessageRoomScreenPComponent implements OnInit {
    @Input() currentRoomId!: string | null
    @Input() messages!: MessageProps[] | null
    @Input() profile!: UserProps | null
    @Input() companion!: UserProps | null
    @Output() clickMyProfilePicture: EventEmitter<void> = new EventEmitter<void>()
    @Output() clickCompanionProfilePicture: EventEmitter<string> = new EventEmitter<string>()

    constructor() {}

    ngOnInit(): void {}

    relativeTime = relativeTime

    onClickMyProfilePicture(): void {
        this.clickMyProfilePicture.emit()
    }

    onClickCompanionProfilePicture(companionId: string | undefined): void {
        this.clickCompanionProfilePicture.emit(companionId)
    }
}
