import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router'
import { Injectable } from '@angular/core'
import { Observable } from 'rxjs'
import { map } from 'rxjs/operators'
import { DeepRecommendLocalStorageService } from './services/local-strage.service'
import { accessTokenKey } from './utilities/api'

@Injectable({
    providedIn: 'root',
})
export class DeepRecommendGuard implements CanActivate {
    constructor(private router: Router, private localStorage: DeepRecommendLocalStorageService) {}
    canActivate(
        next: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
    ): Observable<boolean> | Promise<boolean> | boolean {
        return this.localStorage.getItem(accessTokenKey).pipe(
            map((token) => {
                console.log(token)
                if (!token) {
                    this.router.navigate(['sign-in'])
                    return false
                }
                return true
            })
        )
    }
}
