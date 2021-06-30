import { Injectable } from '@angular/core';
import { QueryEntity } from '@datorama/akita';
import { ProfileProps, UserProps } from './user.model';
import { UserStore, UserState } from './user.store';

@Injectable({ providedIn: 'root' })
export class UserQuery extends QueryEntity<UserState> {
    users$ = this.selectAll();

    profile$ = this.select('profile');

    companion$ = this.select('companion');

    ui$ = this.select('ui');
    genders$ = this.select((state) => state.ui.genders);
    years$ = this.select((state) => state.ui.years);
    months$ = this.select((state) => state.ui.months);
    days$ = this.select((state) => state.ui.days);
    birthPlaces$ = this.select((state) => state.ui.birthPlaces);

    constructor(protected store: UserStore) {
        super(store);
    }

    get profileGetter(): ProfileProps {
        return this.getValue().profile;
    }

    get companionGetter(): UserProps {
        return this.getValue().companion;
    }
}
