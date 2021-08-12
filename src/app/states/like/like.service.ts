import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { Observable } from 'rxjs'
import { tap } from 'rxjs/operators'
import { apiLikeUrl, httpHeaders } from 'src/app/general/utilities/api'
import { LikeProps } from './like.model'
import { LikeStore } from './like.store'

@Injectable({ providedIn: 'root' })
export class LikeService {
    constructor(private readonly likeStore: LikeStore, private readonly http: HttpClient) {}

    getLikes(): Observable<LikeProps[]> {
        return this.http.get<LikeProps[]>(apiLikeUrl, httpHeaders).pipe(tap((data) => this.likeStore.setLikes(data)))
    }
}
