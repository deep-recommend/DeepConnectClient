import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { LikeProps } from 'src/app/states/like/like.model';
import { UserProps } from 'src/app/states/user/user.model';
import { AppQuery } from '../../../../states/app.query';
import { AppService } from '../../../../states/app.service';
import { AppStore } from '../../../../states/app.store';

@Component({
    selector: 'app-like-from-others-c',
    templateUrl: './like-from-others-c.component.html',
    styleUrls: ['./like-from-others-c.component.scss'],
})
export class LikeFromOthersCComponent {
    currentUserId$: Observable<number> = this.query.user.currentUserId$;
    users$: Observable<UserProps[]> = this.query.user.users$;
    profile$: Observable<UserProps> = this.query.user.profile$;
    likes$: Observable<LikeProps[]> = this.query.like.likes$;

    constructor(
        private readonly router: Router,
        private readonly service: AppService,
        private readonly query: AppQuery,
        private readonly store: AppStore
    ) {}

    onReceivedClickUserToMessage(userId: number): void {
        this.service.user.getCompanionRequest(userId).subscribe(() => {
            this.store.user.updateUserId(userId);
            this.router.navigate([`/user-detail/${userId}`]);
        });
    }
}
