import { Injectable } from '@angular/core'
import { includes, intersection } from 'lodash'
import { Observable, of } from 'rxjs'
import { filter, first } from 'rxjs/operators'
import { LikeProps } from '../like/like.model'
import { LikeQuery } from '../like/like.query'

@Injectable({
    providedIn: 'root',
})
export class UiService {
    likes?: LikeProps[];

    constructor(private readonly likeQuery: LikeQuery) {
        this.likeQuery.likes$.subscribe(likes => {
            this.likes = likes
        })
    }

    alreadyLikedByMyself(currentUserId: number, userId: number): Observable<boolean> {
        const likeUserIds = (this.likes as LikeProps[]).filter((o) => 
            o.currentUserId === currentUserId
        ).map(o => o.userId)
        const isLike = includes(likeUserIds, userId)
        return of(isLike)
    }

    alreadyLikedByOthers(currentUserId: number, userId: number): Observable<boolean> {
        const likeUserIds = (this.likes as LikeProps[]).filter((o) => 
                o.currentUserId === userId
        ).map(o => o.userId)
        const isLike = includes(likeUserIds, currentUserId)
        return of(isLike)
    }

    isMatching(currentUserId: number, userId: number): Observable<boolean> {
        const likeByCurrentUserIds = (this.likes as LikeProps[]).filter((o) => {
            o.currentUserId === currentUserId
        }).map(o => o.id);
        const likeByUserIds = (this.likes as LikeProps[]).filter((o) => {
            o.currentUserId === userId
        }).map(o => o.currentUserId)
        const likeEachOther = intersection(likeByCurrentUserIds, likeByUserIds)
        const isMatching = likeEachOther.length !== 0
        return of(isMatching)
    }
}
