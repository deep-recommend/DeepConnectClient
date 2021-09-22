import { Injectable } from '@angular/core'
import { EntityState, EntityStore, StoreConfig } from '@datorama/akita'
import { LikeProps } from './like.model'

export interface LikeState extends EntityState<LikeProps> {
    ui: {
        existsMatchingUsers: boolean
    }
}

const initialState = {
    ui: {
        existsMatchingUsers: Boolean(),
    },
}

@Injectable({ providedIn: 'root' })
@StoreConfig({
    name: 'like',
})
export class LikeStore extends EntityStore<LikeState> {
    constructor() {
        super(initialState)
    }

    setLikes(likes: LikeProps[]): void {
        this.set(likes)
    }

    updateExistsMatchingUsers(bool: boolean): void {
        this.update({
            ui: {
                ...this.getValue().ui,
                existsMatchingUsers: bool,
            },
        })
    }
}
