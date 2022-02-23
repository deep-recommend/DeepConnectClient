import { Component, Input, Output, EventEmitter } from '@angular/core';
import { UserProps } from 'src/app/states/user/user.model';

@Component({
    selector: 'app-matched-detail-p',
    templateUrl: './matched-detail-p.component.html',
    styleUrls: ['./matched-detail-p.component.scss'],
})
export class MatchedDetailPComponent {
    @Input() user!: UserProps | null;
    @Input() profile!: UserProps | null;
    @Input() currentUserId!: number | null;
    @Output() clickToDetails: EventEmitter<number> = new EventEmitter<number>();

    onClickToDetails(): void {
        this.clickToDetails.emit(this.user?.id);
    }
}
