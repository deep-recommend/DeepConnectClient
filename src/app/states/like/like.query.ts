import { Injectable } from '@angular/core';
import { QueryEntity } from '@datorama/akita';
import { Observable } from 'rxjs';
import { LikeProps } from './like.model';
import { LikeStore, LikeState } from './like.store';

@Injectable({ providedIn: 'root' })
export class LikeQuery extends QueryEntity<LikeState> {
    likes$ = this.selectAll();
    ui$ = this.select('ui');

    alreadyLikedByMyself$: Observable<boolean> = this.select(
        (state) => state.ui.alreadyLikedByMyself
    );
    alreadyLikedByOther$: Observable<boolean> = this.select(
        (state) => state.ui.alreadyLikedByOther
    );
    matched$: Observable<boolean> = this.select((state) => state.ui.matched);

    constructor(protected store: LikeStore) {
        super(store);
    }

    get likeAll(): LikeProps[] {
        return this.getAll();
    }
}
