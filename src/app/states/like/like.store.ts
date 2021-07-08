import { Injectable } from '@angular/core'
import { EntityState, EntityStore, StoreConfig } from '@datorama/akita'
import { LikeProps } from './like.model'

export interface LikeState extends EntityState<LikeProps> {
    ui: {}
}

const initialState = {
    ui: {},
}

@Injectable({ providedIn: 'root' })
@StoreConfig({
    name: 'like',
    idKey: '_id',
})
export class LikeStore extends EntityStore<LikeState> {
    constructor() {
        super(initialState)
    }

    setLikes(likes: LikeProps[]): void {
        this.set(likes)
    }
}
