import {
    ChangeDetectionStrategy,
    Component,
    EventEmitter,
    Input,
    OnInit,
    Output,
} from '@angular/core';
import { RoomProps } from 'src/app/states/room/room.model';
import { UserProps } from 'src/app/states/user/user.model';

@Component({
    selector: 'app-matching-users-p',
    templateUrl: './matching-users-p.component.html',
    styleUrls: ['./matching-users-p.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MatchingUsersPComponent implements OnInit {
    @Input() rooms!: RoomProps[] | null;
    @Output() clickUserToMessage: EventEmitter<number> =
        new EventEmitter<number>();
    @Output() outputUsers: EventEmitter<UserProps> =
        new EventEmitter<UserProps>();

    constructor() {}

    ngOnInit(): void {}

    onReceivedClickUserToMessage(userId: number): void {
        this.clickUserToMessage.emit(userId);
    }
}
