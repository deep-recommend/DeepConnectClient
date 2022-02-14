import {
    ChangeDetectionStrategy,
    Component,
    EventEmitter,
    Input,
    Output,
} from '@angular/core';
import { LikeProps } from 'src/app/states/like/like.model';
import { UserProps } from 'src/app/states/user/user.model';

@Component({
    selector: 'app-like-from-me-p',
    templateUrl: './like-from-me-p.component.html',
    styleUrls: ['./like-from-me-p.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LikeFromMePComponent {
    @Input() currentUserId!: number | null;
    @Input() users!: UserProps[] | null;
    @Input() profile!: UserProps | null;
    @Input() likes!: LikeProps[] | null;
    @Output() clickToDetails: EventEmitter<number> = new EventEmitter<number>();

    constructor() {}

    onClickToDetails(userId: number): void {
        this.clickToDetails.emit(userId);
    }
}
