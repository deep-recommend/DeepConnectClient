import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { SignInProps } from 'src/app/general/interfaces/sign-in.interface';
import { HttpClientService } from 'src/app/general/services/http-client.service';
import { apiUserUrl, httpHeaders } from 'src/app/general/utilities/api';
import { UserProps } from './user.model';
import { UserStore } from './user.store';

@Injectable({ providedIn: 'root' })
export class UserService {
    private readonly _apiUserUrl = apiUserUrl;
    private readonly _httpHeaders = httpHeaders;

    constructor(
        private readonly http: HttpClient,
        private readonly httpService: HttpClientService,
        private readonly userStore: UserStore
    ) {}

    getUsersRequest(): Observable<UserProps[]> {
        return this.http
            .get<UserProps[]>(this._apiUserUrl, this._httpHeaders)
            .pipe(tap((data) => this.userStore.setUsers(data)));
    }

    getOnlyUserRequest(userId: string): Observable<UserProps> {
        const url = `${this._apiUserUrl}/${userId}`;
        return this.http.get<UserProps>(url, this._httpHeaders);
    }

    getCompanionRequest(userId: string): Observable<UserProps> {
        const url = `${this._apiUserUrl}/${userId}`;
        return this.http
            .get<UserProps>(url, this._httpHeaders)
            .pipe(tap((data) => this.userStore.updateCompanion(data)));
    }

    postUserRequest(user: SignInProps): Observable<SignInProps> {
        console.log('Sign up user', user);
        return this.httpService.post(this._apiUserUrl, user, this._httpHeaders);
    }

    updateUserRequest(id: number, user: UserProps): Observable<UserProps> {
        const url = `${this._apiUserUrl}/${id}`;
        return this.httpService.put(url, user, this._httpHeaders);
    }

    deleteUserRequest(id: number): Observable<void> {
        const url = `${this._apiUserUrl}/${id}`;
        return this.httpService.delete(url, this._httpHeaders);
    }
}
