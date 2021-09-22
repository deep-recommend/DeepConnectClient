import { Injectable } from '@angular/core'
import { includes, intersection } from 'lodash'
import { LikeQuery } from '../like/like.query'

@Injectable({
    providedIn: 'root',
})
export class UiService {
    constructor(private readonly likeQuery: LikeQuery) {}

    alreadyLikedByMyself(currentUserId: number, userId: number): boolean {
        let isLike!: boolean
        let likeUserIds: number[] = []
        this.likeQuery.likeAll.forEach((data) => {
            if (data.currentUserId === currentUserId) {
                likeUserIds.push(data.userId)
            }
        })
        isLike = includes(likeUserIds, userId)
        return isLike
    }

    alreadyLikedByOthers(currentUserId: number, userId: number): boolean {
        let isLike!: boolean
        let likeUserIds: number[] = []
        this.likeQuery.likeAll.forEach((data) => {
            if (data.currentUserId === userId) {
                likeUserIds.push(data.userId)
            }
        })
        isLike = includes(likeUserIds, currentUserId)
        return isLike
    }

    isMatching(currentUserId: number, userId: number): boolean {
        let isMatching!: boolean
        let likeEachOther!: any[]
        let likeByCurrentUserIds: number[] = []
        let likeByUserIds: number[] = []
        this.likeQuery.likeAll.forEach((data) => {
            if (data.currentUserId === currentUserId) {
                likeByCurrentUserIds.push(data.userId)
            } else if (data.currentUserId === userId) {
                likeByUserIds.push(data.currentUserId)
            } else {
                return
            }
        })
        likeEachOther = intersection(likeByCurrentUserIds, likeByUserIds)
        isMatching = likeEachOther.length !== 0
        return isMatching
    }
}
