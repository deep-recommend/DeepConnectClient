import { Injectable } from '@angular/core'
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router'
import { merge, Observable } from 'rxjs'
import { first, map, mergeMap } from 'rxjs/operators'
import { ProgressSpinnerService } from 'src/app/general/components/progress-spinner/progress-spinner.service'
import { AuthenticationService } from 'src/app/general/services/authentication.service'
import { LikeService } from 'src/app/states/like/like.service'
import { NotificationService } from 'src/app/states/notification/notification.service'
import { UiStore } from 'src/app/states/ui/ui.store'
import { UserService } from 'src/app/states/user/user.service'

@Injectable()
export class NotificationResolverService implements Resolve<Observable<void>> {
    constructor(
        private readonly userService: UserService,
        private readonly likeService: LikeService,
        private readonly authenticationService: AuthenticationService,
        private readonly uiStore: UiStore,
        private readonly spinner: ProgressSpinnerService,
        private readonly notificationService: NotificationService
    ) {}

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<void> {
        this.uiStore.displayPageName(route.data.title)

        return merge(
            this.userService.getUsersRequest(),
            this.likeService.getLikes(),
            this.authenticationService.getProfile(),
            this.notificationService.getNotifications()
        ).pipe(
            first(),
            mergeMap(async () => this.spinner.close()),
            map((observer) => void observer)
        )
    }
}
