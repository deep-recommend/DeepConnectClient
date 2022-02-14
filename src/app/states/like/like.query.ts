import { Injectable } from '@angular/core';
import { QueryEntity } from '@datorama/akita';
import { LikeProps } from './like.model';
import { LikeStore, LikeState } from './like.store';

@Injectable({ providedIn: 'root' })
export class LikeQuery extends QueryEntity<LikeState> {
    likes$ = this.selectAll();

    ui$ = this.select('ui');

    constructor(protected store: LikeStore) {
        super(store);
    }

    get likeAll(): LikeProps[] {
        return this.getAll();
    }
}
