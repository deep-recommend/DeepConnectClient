import { Injectable } from '@angular/core'
import { includes } from 'lodash'
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
}
