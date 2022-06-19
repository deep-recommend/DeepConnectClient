import {
    ChangeDetectionStrategy,
    Component,
    EventEmitter,
    Input,
    OnInit,
    Output,
} from '@angular/core';
import { LikeProps } from 'src/app/states/like/like.model';
import { UserProps } from 'src/app/states/user/user.model';

@Component({
    selector: 'app-dashboard-user-list-p',
    templateUrl: './dashboard-user-list-p.component.html',
    styleUrls: ['./dashboard-user-list-p.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DashboardUserListPComponent implements OnInit {
    @Input() isMobile: boolean | null = false;
    @Input() profile!: UserProps | null;
    @Input() currentUserId!: number | null;
    @Input() users!: UserProps[] | null;
    @Input() likes!: LikeProps[] | null;
    @Output() clickLikeButton: EventEmitter<number> =
        new EventEmitter<number>();
    @Output() clickUnlikeButton: EventEmitter<number> =
        new EventEmitter<number>();
    @Output() clickUsersToDetails: EventEmitter<number> =
        new EventEmitter<number>();

    constructor() {}

    ngOnInit() {}

    onClickLikeButton(userId: number): void {
        this.clickLikeButton.emit(userId);
    }

    onClickUnlikeButton(userId: number): void {
        this.clickUnlikeButton.emit(userId);
    }

    onReceivedClickUsersToDetail(userId: number): void {
        this.clickUsersToDetails.emit(userId);
    }
}
