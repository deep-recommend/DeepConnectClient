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
    selector: 'app-matched-p',
    templateUrl: './matched-p.component.html',
    styleUrls: ['./matched-p.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MatchedPComponent {
    @Input() currentUserId!: number | null;
    @Input() users!: UserProps[] | null;
    @Input() profile!: UserProps | null;
    @Input() likes!: LikeProps[] | null;
    @Output() clickUserToMessage: EventEmitter<number> =
        new EventEmitter<number>();

    onReceivedClickUserToMessage(userId: number): void {
        this.clickUserToMessage.emit(userId);
    }
}
