import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { SignInProps } from 'src/app/general/interfaces/sign-in.interface';
import { HttpClientService } from 'src/app/general/services/http-client.service';
import { apiUserUrl, httpHeaders } from 'src/app/general/utilities/api';
import { UserProps } from './user.model';

@Injectable({ providedIn: 'root' })
export class UserService {
    private readonly _apiUserUrl = apiUserUrl;
    private readonly _httpHeaders = httpHeaders;

    constructor(private readonly http: HttpClient, private readonly httpService: HttpClientService) {}

    getUsersRequest(): Observable<{}> {
        return this.http.get(this._apiUserUrl, this._httpHeaders);
    }

    postUserRequest(user: SignInProps): Observable<SignInProps> {
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
