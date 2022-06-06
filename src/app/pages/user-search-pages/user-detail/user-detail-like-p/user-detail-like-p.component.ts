import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
    selector: 'app-user-detail-like-p',
    templateUrl: './user-detail-like-p.component.html',
    styleUrls: ['./user-detail-like-p.component.scss'],
})
export class UserDetailLikePComponent {
    @Input() alreadyLikedByMySelf?: boolean | null;

    @Output() clickLikeButton: EventEmitter<void> = new EventEmitter<void>();
    @Output() clickUnlikeButton: EventEmitter<void> = new EventEmitter<void>();
    @Output() clickNextButton: EventEmitter<void> = new EventEmitter<void>();

    onClickLikeButton(): void {
        this.clickLikeButton.emit();
    }

    onClickUnlikeButton(): void {
        this.clickUnlikeButton.emit();
    }

    onClickNextButton(): void {
        this.clickNextButton.emit();
    }
}
