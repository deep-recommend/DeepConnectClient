import { Injectable } from '@angular/core'
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router'
import { merge, Observable } from 'rxjs'
import { first, map } from 'rxjs/operators'
import { AuthenticationService } from 'src/app/general/services/authentication.service'
import { LikeService } from 'src/app/states/like/like.service'
import { UserService } from 'src/app/states/user/user.service'

@Injectable()
export class LikeFromOthersResolverService implements Resolve<Observable<void>> {
    constructor(
        private readonly userService: UserService,
        private readonly likeService: LikeService,
        private readonly authenticationService: AuthenticationService
    ) {}

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<void> {
        return merge(
            this.userService.getUsersRequest(),
            this.likeService.getLikes(),
            this.authenticationService.getProfile()
        ).pipe(
            first(),
            map((observer) => void observer)
        )
    }
}
