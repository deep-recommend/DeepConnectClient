import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { apiLikeUrl, httpHeaders } from 'src/app/general/utilities/api';
import { LikeProps } from './like.model';
import { LikeStore } from './like.store';

@Injectable({ providedIn: 'root' })
export class LikeService {
    constructor(
        private readonly likeStore: LikeStore,
        private readonly http: HttpClient
    ) {}

    getLikes(): Observable<LikeProps[]> {
        return this.http
            .get<LikeProps[]>(apiLikeUrl, httpHeaders)
            .pipe(tap((data) => this.likeStore.setLikes(data)));
    }

    alreadyLikedByMyself(
        currentUserId: number,
        userId: number
    ): Observable<boolean> {
        const url = `${apiLikeUrl}/byMySelf?currentUserId=${currentUserId}&userId=${userId}`;
        return this.http
            .get<boolean>(url, httpHeaders)
            .pipe(
                tap((data) => this.likeStore.updateAlreadyLikedByMySelf(data))
            );
    }

    alreadyLikedByOthers(
        currentUserId: number,
        userId: number
    ): Observable<boolean> {
        const url = `${apiLikeUrl}/byOther?currentUserId=${currentUserId}&userId=${userId}`;
        return this.http
            .get<boolean>(url, httpHeaders)
            .pipe(
                tap((data) => this.likeStore.updateAlreadyLikedByOther(data))
            );
    }

    matched(currentUserId: number, userId: number): Observable<boolean> {
        const url = `${apiLikeUrl}/matched?currentUserId=${currentUserId}&userId=${userId}`;
        return this.http
            .get<boolean>(url, httpHeaders)
            .pipe(tap((data) => this.likeStore.updateMatched(data)));
    }
}
