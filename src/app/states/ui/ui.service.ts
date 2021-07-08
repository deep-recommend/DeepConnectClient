import { Injectable } from '@angular/core'
import { includes, intersection } from 'lodash'
import { LikeQuery } from '../like'

@Injectable({
    providedIn: 'root',
})
export class UiService {
    constructor(private readonly likeQuery: LikeQuery) {}

    alreadyLiked(currentUserId: string, userId: string): boolean {
        let isLike!: boolean
        let likeUserIds: string[] = []
        this.likeQuery.likeAll.forEach((data) => {
            if (data.currentUserId === currentUserId) {
                likeUserIds.push(data.userId)
            }
        })
        isLike = includes(likeUserIds, userId)
        return isLike
    }

    // TODO 自分をいいねしているユーザー
    // likedByOtherUsers()

    isMatching(currentUserId: string, userId: string): boolean {
        let likeEachOther!: any[]
        let likeByCurrentUserIds: string[] = []
        let likeByUserIds: string[] = []
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
        if (likeEachOther.length === 0) {
            return false
        }
        return true
    }
}
