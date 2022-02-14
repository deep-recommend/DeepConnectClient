import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { UiService } from 'src/app/states/ui/ui.service';
import { UserProps } from 'src/app/states/user/user.model';

@Component({
    selector: 'app-like-from-others-detail-p',
    templateUrl: './like-from-others-detail-p.component.html',
    styleUrls: ['./like-from-others-detail-p.component.scss'],
})
export class LikeFromOthersDetailPComponent implements OnInit {
    @Input() user!: UserProps | null;
    @Input() profile!: UserProps | null;
    @Input() currentUserId!: number | null;
    @Output() clickToDetails: EventEmitter<number> = new EventEmitter<number>();

    get alreadyLikedByOthers(): boolean {
        return this.uiService.alreadyLikedByOthers(
            Number(this.currentUserId),
            Number(this.user?.id)
        );
    }

    constructor(private readonly uiService: UiService) {}

    ngOnInit(): void {}

    onClickToDetails(): void {
        this.clickToDetails.emit(this.user?.id);
    }
}
