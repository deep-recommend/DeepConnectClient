import { AfterViewChecked, Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core'
import { relativeTime } from 'src/app/general/functions/moment'
import { MessageProps } from 'src/app/states/message'
import { UserProps } from 'src/app/states/user'
@Component({
    selector: 'app-message-room-screen-p',
    templateUrl: './message-room-screen-p.component.html',
    styleUrls: ['./message-room-screen-p.component.scss'],
})
export class MessageRoomScreenPComponent implements OnInit, AfterViewChecked {
    @Input() currentRoomId!: string | null
    @Input() messages!: MessageProps[] | null
    @Input() profile!: UserProps | null
    @Input() companion!: UserProps | null
    @Output() clickMyProfilePicture: EventEmitter<void> = new EventEmitter<void>()
    @Output() clickCompanionProfilePicture: EventEmitter<string> = new EventEmitter<string>()
    @ViewChild('scroll') private scrollContainer!: ElementRef

    constructor() {}

    ngOnInit(): void {
        this.scrollToBottom()
    }

    ngAfterViewChecked() {
        this.scrollToBottom()
    }

    relativeTime = relativeTime

    onClickMyProfilePicture(): void {
        this.clickMyProfilePicture.emit()
    }

    onClickCompanionProfilePicture(companionId: string | undefined): void {
        this.clickCompanionProfilePicture.emit(companionId)
    }

    scrollToBottom(): void {
        this.scrollContainer.nativeElement.scrollTop = this.scrollContainer.nativeElement.scrollHeight
    }
}
