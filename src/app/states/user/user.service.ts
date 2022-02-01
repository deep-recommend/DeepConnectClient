import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { Observable } from 'rxjs'
import { tap } from 'rxjs/operators'
import { SignInProps } from 'src/app/general/interfaces/sign-in.interface'
import { UpdateProfileProps } from 'src/app/general/interfaces/update-profile.interface'
import { HttpClientService } from 'src/app/general/services/http-client.service'
import { apiUrl, apiUserUrl, httpHeaders, httpOptions } from 'src/app/general/utilities/api'
import { UserProps } from './user.model'
import { UserQuery } from './user.query'
import { UserStore } from './user.store'

@Injectable({ providedIn: 'root' })
export class UserService {
    constructor(
        private readonly http: HttpClient,
        private readonly httpService: HttpClientService,
        private readonly userStore: UserStore,
        private readonly userQuery: UserQuery,
    ) {}

    getUsersRequest(): Observable<UserProps[]> {
        const search = this.userQuery.searchGetter
        const paramKeys: string[] = [
            'position',
            'gender',
            'birthYear',
            'birthPlace',
            'agency',
            'work',
            'hobby',
            'brothersAndSisters',
            'educationalBackground',
            'secondLanguage',
            'holiday',
            'instrument',
            'sport',
            'isDrinking',
            'isSmoking',
            'hasPet',
            'isMarried',
        ]
        const paramValues: string[] = [
            search.position,
            search.gender,
            search.birthYear,
            search.birthPlace,
            search.agency,
            search.work,
            search.hobby,
            search.brothersAndSisters,
            search.educationalBackground,
            search.secondLanguage,
            search.holiday,
            search.instrument,
            search.sport,
            String(search.isDrinking),
            String(search.isSmoking),
            String(search.hasPet),
            String(search.isMarried),
        ]
        return this.http
            .get<UserProps[]>(apiUserUrl, httpOptions(paramKeys, paramValues))
            .pipe(tap((data) => this.userStore.setUsers(data)))
    }

    getLikedFromMeUsersRequest(): Observable<UserProps[]> {
        const url = `${apiUrl}/?likeStatus=likeFromMe`;
        return this.http
            .get<UserProps[]>(url, httpHeaders)
            .pipe(tap((data) => this.userStore.setUsers(data)))
    }

    getLikedFromOthersUsersRequest(): Observable<UserProps[]> {
        const url = `${apiUrl}/?likeStatus=likeFromOther`;
        return this.http
            .get<UserProps[]>(url, httpHeaders)
            .pipe(tap((data) => this.userStore.setUsers(data)))
    }

    getMatchedUsersRequest(): Observable<UserProps[]> {
        const url = `${apiUserUrl}/?likeStatus=matched`;
        return this.http
            .get<UserProps[]>(url, httpHeaders)
            .pipe(tap((data) => this.userStore.setUsers(data)))
    }

    getOnlyUserRequest(userId: number): Observable<UserProps> {
        const url = `${apiUserUrl}/${userId}`
        return this.http.get<UserProps>(url, httpHeaders).pipe(tap((data) => this.userStore.updateDetailUser(data)))
    }

    getCompanionRequest(userId: number): Observable<UserProps> {
        const url = `${apiUserUrl}/${userId}`
        return this.http.get<UserProps>(url, httpHeaders).pipe(tap((data) => this.userStore.updateCompanion(data)))
    }

    postUserRequest(user: SignInProps): Observable<SignInProps> {
        return this.httpService.post(apiUserUrl, user, httpHeaders)
    }

    updateUserRequest(id: number, user: UpdateProfileProps): Observable<UserProps> {
        console.log(user)
        const url = `${apiUserUrl}/${id}`
        return this.httpService.put(url, user, httpHeaders)
    }

    updateProfileRequest(id: number, user: UpdateProfileProps): Observable<UserProps> {
        const url = `${apiUserUrl}/${id}`
        return this.httpService.put(url, user, httpHeaders).pipe(tap((data) => this.userStore.updateProfile(data)))
    }

    deleteUserRequest(id: number): Observable<void> {
        const url = `${apiUserUrl}/${id}`
        return this.httpService.delete(url, httpHeaders)
    }
}
