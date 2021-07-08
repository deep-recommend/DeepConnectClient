import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { Observable } from 'rxjs'
import { tap } from 'rxjs/operators'
import { apiLikeUrl, httpHeaders, httpOptions } from 'src/app/general/utilities/api'
import { CreateLikeProps, LikeProps } from './like.model'
import { LikeStore } from './like.store'
import { LikeQuery } from '../like'

@Injectable({ providedIn: 'root' })
export class LikeService {
    private readonly _apiLikeUrl = apiLikeUrl
    private readonly _httpHeaders = httpHeaders

    constructor(private readonly likeStore: LikeStore, private readonly http: HttpClient) {}

    getLikes(): Observable<LikeProps[]> {
        return this.http
            .get<LikeProps[]>(this._apiLikeUrl, this._httpHeaders)
            .pipe(tap((data) => this.likeStore.setLikes(data)))
    }

    likeRequest(like: CreateLikeProps): Observable<CreateLikeProps> {
        return this.http.post<CreateLikeProps>(this._apiLikeUrl, like, this._httpHeaders)
    }

    unlikeRequest(query: CreateLikeProps): Observable<void> {
        const paramKeys: string[] = ['currentUserId', 'userId']
        const paramValues: string[] = [query.currentUserId, query.userId]
        return this.http.delete<void>(this._apiLikeUrl, httpOptions(paramKeys, paramValues))
    }
}
