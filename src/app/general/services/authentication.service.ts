import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { UiStore } from 'src/app/states/ui';
import { SignInProps } from '../interfaces/sign-in.interface';
import { accessTokenKey, apiUrl, httpHeaders } from '../utilities/api';

@Injectable({
    providedIn: 'root',
})
export class AuthenticationService {
    private readonly _apiUrl = apiUrl;
    private readonly _httpHeaders = httpHeaders;
    private readonly _accessTokenKey = accessTokenKey;

    constructor(private readonly http: HttpClient, private readonly uiStore: UiStore) {}

    signInRequest(signIn: SignInProps): Observable<void> {
        return this.http.post(this._apiUrl, signIn, this._httpHeaders).pipe(
            map((token) => {
                // localStorage.setItem(this._accessTokenKey, token.APIからのトークン);
            }),
            catchError((err) => {
                if (!(err.error instanceof ErrorEvent)) {
                    this.uiStore.displayErrMsg('Emailまたはパスワードが正しくありません');
                }
                return throwError(undefined);
            })
        );
    }
}
