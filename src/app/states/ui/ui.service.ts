import { Injectable } from '@angular/core'
import { includes, intersection } from 'lodash'
import { LikeQuery } from '../like/like.query'

@Injectable({
    providedIn: 'root',
})
export class UiService {
    constructor(private readonly likeQuery: LikeQuery) {}

    alreadyLikedByMyself(currentUserId: number, userId: number): boolean {
        const likeUserIds = this.likeQuery.likeAll.filter((o) => 
            o.currentUserId === currentUserId
        ).map(o => o.userId)
        const isLike = includes(likeUserIds, userId)
        return isLike
    }

    alreadyLikedByOthers(currentUserId: number, userId: number): boolean {
        const likeUserIds = this.likeQuery.likeAll.filter((o) => 
                o.currentUserId === userId
        ).map(o => o.userId)
        const isLike = includes(likeUserIds, currentUserId)
        return isLike
    }

    isMatching(currentUserId: number, userId: number): boolean {
        const likeByCurrentUserIds = this.likeQuery.likeAll.filter((o) => {
            o.currentUserId === currentUserId
        }).map(o => o.id);
        const likeByUserIds = this.likeQuery.likeAll.filter((o) => {
            o.currentUserId === userId
        }).map(o => o.currentUserId)
        const likeEachOther = intersection(likeByCurrentUserIds, likeByUserIds)
        const isMatching = likeEachOther.length !== 0
        return isMatching
    }
}
