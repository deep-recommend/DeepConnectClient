import { Injectable } from '@angular/core'
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router'
import { merge, Observable } from 'rxjs'
import { last, map } from 'rxjs/operators'
import { AuthenticationService } from 'src/app/general/services/authentication.service'
import { UserService } from 'src/app/states/user/user.service'

@Injectable()
export class MyPageResolverService implements Resolve<Observable<void>> {
    constructor(
        private readonly userService: UserService,
        private readonly authenticationService: AuthenticationService
    ) {}

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<void> {
        return merge(this.userService.getUsersRequest(), this.authenticationService.getProfile()).pipe(
            last(),
            map((observer) => void observer)
        )
    }
}
