import { Component } from '@angular/core';
import { forkJoin } from 'rxjs/internal/observable/forkJoin';
import { first, map } from 'rxjs/operators';
import { AuthenticationService } from './general/services/authentication.service';
import { LikeService } from './states/like/like.service';
import { NotificationService } from './states/notification/notification.service';
import { UserService } from './states/user/user.service';

@Component({
    selector: 'app-root',
    template: `<app-layout></app-layout>`,
})
export class AppComponent {
    constructor(
        private readonly userService: UserService,
        private readonly likeService: LikeService,
        private readonly notificationService: NotificationService,
        private readonly authenticationService: AuthenticationService
    ) {
        forkJoin(
            this.userService.getUsersRequest(),
            this.likeService.getLikes(),
            this.authenticationService.getProfile(),
            this.notificationService.getNotifications()
        ).subscribe();
    }
}
