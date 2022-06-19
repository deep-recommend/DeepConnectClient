import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { LikeProps } from 'src/app/states/like/like.model';
import { UserProps } from 'src/app/states/user/user.model';
import { UserStore } from 'src/app/states/user/user.store';
import { AppQuery } from '../../../../states/app.query';
import { AppService } from '../../../../states/app.service';

@Component({
    selector: 'app-like-from-me-c',
    templateUrl: './like-from-me-c.component.html',
    styleUrls: ['./like-from-me-c.component.scss'],
})
export class LikeFromMeCComponent {
    currentUserId$: Observable<number> = this.query.user.currentUserId$;
    users$: Observable<UserProps[]> = this.query.user.users$;
    profile$: Observable<UserProps> = this.query.user.profile$;
    likes$: Observable<LikeProps[]> = this.query.like.likes$;

    constructor(
        private readonly router: Router,
        private readonly userStore: UserStore,
        private readonly service: AppService,
        private readonly query: AppQuery
    ) {}

    onReceivedClickToDetails(userId: number): void {
        this.service.user.getCompanionRequest(userId).subscribe(() => {
            this.userStore.updateUserId(userId);
            this.router.navigate([`/user-detail/${userId}`]);
        });
    }
}
