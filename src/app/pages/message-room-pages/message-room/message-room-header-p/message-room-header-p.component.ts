import { Component, EventEmitter, Input, Output } from '@angular/core';
import { first } from 'rxjs/operators';
import { UserProps } from 'src/app/states/user/user.model';
import { RoomProps } from '../../../../states/room/room.model';
import { UserQuery } from '../../../../states/user/user.query';
import { UserService } from '../../../../states/user/user.service';

@Component({
    selector: 'app-message-room-header-p',
    templateUrl: './message-room-header-p.component.html',
    styleUrls: ['./message-room-header-p.component.scss'],
})
export class MessageRoomHeaderPComponent {
    room?: RoomProps;
    user?: UserProps;

    @Input('room') set roomSetter(data: RoomProps | null) {
        if (!data) return;

        this.room = data;
        // TODO: 親からcurrentUserIdを受け取る
        const userId =
            data.userA === this.userQuery.profileGetter?.id
                ? data.userB
                : data.userA;
        // TODO: Queryから値を受け取る
        this.userService
            .getOnlyUserRequest(userId)
            .pipe(first())
            .subscribe((data: UserProps) => {
                this.user = data;
            });
    }
    @Output() clickAccount: EventEmitter<number | undefined> = new EventEmitter<
        number | undefined
    >();

    constructor(
        private readonly userService: UserService,
        private readonly userQuery: UserQuery
    ) {}

    onClickAccount(userId: number | undefined): void {
        this.clickAccount.emit(userId);
    }
}
