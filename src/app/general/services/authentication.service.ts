import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { Observable, throwError } from 'rxjs'
import { catchError, map, tap } from 'rxjs/operators'
import { UiStore } from 'src/app/states/ui'
import { UserProps, UserStore } from 'src/app/states/user'
import { SignInProps } from '../interfaces/sign-in.interface'
import { UpdateProfileProps } from '../interfaces/update-profile.interface'
import { accessTokenKey, apiAuthUrl, apiProfileUrl, httpHeaders } from '../utilities/api'
import { DeepRecommendLocalStorageService } from './local-strage.service'

@Injectable({
    providedIn: 'root',
})
export class AuthenticationService {
    private readonly _apiAuthUrl = apiAuthUrl
    private readonly _apiProfileUrl = apiProfileUrl
    private readonly _httpHeaders = httpHeaders

    constructor(
        private readonly http: HttpClient,
        private readonly uiStore: UiStore,
        private readonly userStore: UserStore
    ) {}

    signInRequest(signIn: SignInProps): Observable<void> {
        return this.http.post(this._apiAuthUrl, signIn, this._httpHeaders).pipe(
            map((token: any) => {
                localStorage.setItem(accessTokenKey, token.CmCn_access_token)
            }),
            catchError((err) => {
                console.log(err)
                if (err) {
                    this.uiStore.displayErrMsg('Emailまたはパスワードが正しくありません')
                }
                return throwError(undefined)
            })
        )
    }

    getProfile(): Observable<UserProps> {
        return this.http
            .get<UserProps>(this._apiProfileUrl, this._httpHeaders)
            .pipe(tap((data) => this.userStore.updateProfile(data)))
    }

    updateProfile(userId: string, updateUser: UpdateProfileProps): Observable<UserProps> {
        const url = `${this._apiProfileUrl}/${userId}`
        return this.http
            .put<UserProps>(url, updateUser, this._httpHeaders)
            .pipe(tap((data) => this.userStore.updateProfile(data)))
    }
}
