import { Injectable } from '@angular/core'
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router'
import { merge, Observable } from 'rxjs'
import { last, map } from 'rxjs/operators'
import { AuthenticationService } from 'src/app/general/services/authentication.service'
import { UiStore } from 'src/app/states/ui/ui.store'

@Injectable()
export class MyPageSettingResolverService implements Resolve<Observable<void>> {
    constructor(private readonly authenticationService: AuthenticationService, private readonly uiStore: UiStore) {}

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<void> {
        this.uiStore.displayPageName(route.data.title)

        return merge(this.authenticationService.getProfile()).pipe(
            last(),
            map((observer) => void observer)
        )
    }
}
