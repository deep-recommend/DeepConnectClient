import { Component, Input, EventEmitter, Output } from '@angular/core';
import { first } from 'rxjs/operators';
import { RoomProps } from 'src/app/states/room/room.model';
import { UserProps } from 'src/app/states/user/user.model';
import { UserQuery } from '../../../../states/user/user.query';
import { UserService } from '../../../../states/user/user.service';

@Component({
    selector: 'app-matching-users-detail-p',
    templateUrl: './matching-users-detail-p.component.html',
    styleUrls: ['./matching-users-detail-p.component.scss'],
})
export class MatchingUsersDetailPComponent {
    user?: UserProps;

    @Input('room') set room(data: RoomProps) {
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
    @Output() clickToDetails: EventEmitter<number> = new EventEmitter<number>();

    constructor(
        private readonly userService: UserService,
        private readonly userQuery: UserQuery
    ) {}

    onClickToDetails(): void {
        this.clickToDetails.emit(this.user?.id);
    }
}
