import { Injectable } from '@angular/core';
import { EntityState, EntityStore, StoreConfig } from '@datorama/akita';
import { LikeProps } from './like.model';

export interface LikeState extends EntityState<LikeProps> {
    ui: {
        existsMatchingUsers: boolean;
        alreadyLikedByMyself: boolean;
        alreadyLikedByOther: boolean;
        matched: boolean;
    };
}

const initialState = {
    ui: {
        existsMatchingUsers: !!null,
        alreadyLikedByMyself: !!null,
        alreadyLikedByOther: !!null,
        matched: !!null,
    },
};

@Injectable({ providedIn: 'root' })
@StoreConfig({
    name: 'like',
})
export class LikeStore extends EntityStore<LikeState> {
    constructor() {
        super(initialState);
    }

    setLikes(likes: LikeProps[]): void {
        this.set(likes);
    }

    updateExistsMatchingUsers(bool: boolean): void {
        this.update({
            ui: {
                ...this.getValue().ui,
                existsMatchingUsers: bool,
            },
        });
    }

    updateAlreadyLikedByMySelf(bool: boolean): void {
        this.update({
            ui: {
                ...this.getValue().ui,
                alreadyLikedByMyself: bool,
            },
        });
    }

    updateAlreadyLikedByOther(bool: boolean): void {
        this.update({
            ui: {
                ...this.getValue().ui,
                alreadyLikedByOther: bool,
            },
        });
    }

    updateMatched(bool: boolean): void {
        this.update({
            ui: {
                ...this.getValue().ui,
                matched: bool,
            },
        });
    }
}
