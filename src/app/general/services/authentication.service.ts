import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { Observable, throwError } from 'rxjs'
import { catchError, map, tap } from 'rxjs/operators'
import { UiStore } from 'src/app/states/ui/ui.store'
import { UserProps } from 'src/app/states/user/user.model'
import { UserStore } from 'src/app/states/user/user.store'
import { ProgressSpinnerService } from '../components/progress-spinner/progress-spinner.service'
import { SignInProps } from '../interfaces/sign-in.interface'
import { UpdateProfileProps } from '../interfaces/update-profile.interface'
import { accessTokenKey, apiAuthUrl, apiProfileUrl, httpHeaders } from '../utilities/api'

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
        private readonly userStore: UserStore,
        private readonly spinner: ProgressSpinnerService
    ) {}

    signInRequest(signIn: SignInProps): Observable<void> {
        return this.http.post(this._apiAuthUrl, signIn, this._httpHeaders).pipe(
            map((token: any) => {
                localStorage.setItem(accessTokenKey, token.CmCn_access_token)
            }),
            catchError((err) => {
                if (err) {
                    this.uiStore.displayErrMsg('Emailまたはパスワードが正しくありません')
                    this.spinner.close()
                }
                return throwError(err)
            })
        )
    }

    getProfile(): Observable<UserProps> {
        return this.http
            .get<UserProps>(this._apiProfileUrl, httpHeaders)
            .pipe(tap((data) => this.userStore.updateProfile(data)))
    }

    updateProfile(userId: number, updateUser: UpdateProfileProps): Observable<UserProps> {
        const url = `${this._apiProfileUrl}/${userId}`
        return this.http
            .put<UserProps>(url, updateUser, this._httpHeaders)
            .pipe(tap((data) => this.userStore.updateProfile(data)))
    }
}
