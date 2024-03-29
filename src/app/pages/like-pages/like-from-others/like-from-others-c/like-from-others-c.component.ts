import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { LikeProps } from 'src/app/states/like/like.model';
import { LikeQuery } from 'src/app/states/like/like.query';
import { UserProps } from 'src/app/states/user/user.model';
import { UserQuery } from 'src/app/states/user/user.query';
import { UserService } from 'src/app/states/user/user.service';
import { UserStore } from 'src/app/states/user/user.store';

@Component({
    selector: 'app-like-from-others-c',
    templateUrl: './like-from-others-c.component.html',
    styleUrls: ['./like-from-others-c.component.scss'],
})
export class LikeFromOthersCComponent {
    currentUserId$: Observable<number> = this.userQuery.currentUserId$;
    users$: Observable<UserProps[]> = this.userQuery.users$;
    profile$: Observable<UserProps> = this.userQuery.profile$;
    likes$: Observable<LikeProps[]> = this.likeQuery.likes$;

    constructor(
        private readonly userService: UserService,
        private readonly userQuery: UserQuery,
        private readonly router: Router,
        private readonly likeQuery: LikeQuery,
        private readonly userStore: UserStore
    ) {}

    onReceivedClickUserToMessage(userId: number): void {
        this.userService.getCompanionRequest(userId).subscribe(() => {
            this.userStore.updateUserId(userId);
            this.router.navigate([`/user-detail/${userId}`]);
        });
    }
}
