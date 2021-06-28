import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { UiStore } from 'src/app/states/ui';
import { ProfileProps, UserStore } from 'src/app/states/user';
import { SignInProps } from '../interfaces/sign-in.interface';
import { accessTokenKey, apiAuthUrl, apiProfileUrl, httpHeaders } from '../utilities/api';

@Injectable({
    providedIn: 'root',
})
export class AuthenticationService {
    private readonly _apiAuthUrl = apiAuthUrl;
    private readonly _apiProfileUrl = apiProfileUrl;
    private readonly _httpHeaders = httpHeaders;
    private readonly _accessTokenKey = accessTokenKey;

    constructor(
        private readonly http: HttpClient,
        private readonly uiStore: UiStore,
        private readonly userStore: UserStore
    ) {}

    signInRequest(signIn: SignInProps): Observable<void> {
        return this.http.post(this._apiAuthUrl, signIn, this._httpHeaders).pipe(
            map((token: any) => {
                localStorage.setItem(this._accessTokenKey, String(token.CmCn_access_token));
            }),
            catchError((err) => {
                console.log(err);
                if (err) {
                    this.uiStore.displayErrMsg('Emailまたはパスワードが正しくありません');
                }
                return throwError(undefined);
            })
        );
    }

    getProfile(): Observable<ProfileProps> {
        return this.http
            .get<ProfileProps>(this._apiProfileUrl, this._httpHeaders)
            .pipe(tap((data) => this.userStore.updateProfile(data.user)));
    }
}
