import {
    AfterViewInit,
    Component,
    DoCheck,
    ElementRef,
    EventEmitter,
    Input,
    OnInit,
    Output,
    ViewChild,
} from '@angular/core';
import { relativeTime } from 'src/app/general/functions/moment';
import { MessageProps } from 'src/app/states/message/message.model';
import { UserProps } from 'src/app/states/user/user.model';
import { RoomProps } from '../../../../states/room/room.model';
import { UserQuery } from '../../../../states/user/user.query';

@Component({
    selector: 'app-message-room-screen-p',
    templateUrl: './message-room-screen-p.component.html',
    styleUrls: ['./message-room-screen-p.component.scss'],
})
export class MessageRoomScreenPComponent
    implements OnInit, AfterViewInit, DoCheck
{
    room?: RoomProps;
    companion?: UserProps;
    relativeTime = relativeTime;
    maxScroll: number = 0;
    canScrollBottom: boolean = false;

    @Input() currentRoomId?: number | null;
    @Input() messages?: MessageProps[] | null;
    @Input() profile?: UserProps | null;
    @Input('room') set roomSetter(data: RoomProps | null) {
        if (!data) return;

        this.room = data;

        const userId = this.userQuery.getOtherUserIdByRoom(this.room);
        this.companion = this.userQuery.getById(userId);
    }

    @Output() clickMyProfilePicture: EventEmitter<void> =
        new EventEmitter<void>();
    @Output() clickCompanionProfilePicture: EventEmitter<number> =
        new EventEmitter<number>();

    @ViewChild('scroll') scrollContainer!: ElementRef;

    constructor(private readonly userQuery: UserQuery) {}

    ngOnInit(): void {}

    ngAfterViewInit(): void {
        this.scrollToBottom();

        this.maxScroll = this.scrollContainer.nativeElement.scrollTop;
        this.canScrollBottom =
            this.scrollContainer.nativeElement.scrollTop <
            this.maxScroll * 0.95;
    }

    onScroll(event: any) {
        console.log(this.scrollContainer?.nativeElement.scrollTop);
        this.canScrollBottom =
            this.scrollContainer.nativeElement.scrollTop <
            this.maxScroll * 0.95;
    }

    ngDoCheck(): void {}

    onClickMyProfilePicture(): void {
        this.clickMyProfilePicture.emit();
    }

    onClickCompanionProfilePicture(companionId: number | undefined): void {
        this.clickCompanionProfilePicture.emit(companionId);
    }

    scrollToBottom(): void {
        this.scrollContainer.nativeElement.scrollTop =
            this.scrollContainer.nativeElement.scrollHeight;
    }
}
