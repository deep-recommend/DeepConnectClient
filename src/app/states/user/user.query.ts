import { Injectable } from '@angular/core';
import { QueryEntity } from '@datorama/akita';
import { UserProps } from './user.model';
import { UserStore, UserState } from './user.store';

@Injectable({ providedIn: 'root' })
export class UserQuery extends QueryEntity<UserState> {
    users$ = this.selectAll();

    profile$ = this.select('profile');
    currentUserId$ = this.select((state) => state.profile.id);

    companion$ = this.select('companion');
    detailUser$ = this.select('detailUser');

    ui$ = this.select('ui');
    positions$ = this.select((state) => state.ui.positions);
    genders$ = this.select((state) => state.ui.genders);
    years$ = this.select((state) => state.ui.years);
    months$ = this.select((state) => state.ui.months);
    days$ = this.select((state) => state.ui.days);
    birthPlaces$ = this.select((state) => state.ui.birthPlaces);
    brothersAndSisters$ = this.select((state) => state.ui.brothersAndSisters);
    holiday$ = this.select((state) => state.ui.holiday);

    search$ = this.select('search');

    existsMatchingUsers$ = this.select('existsMatchingUsers');

    constructor(protected store: UserStore) {
        super(store);
    }

    get profileGetter(): UserProps {
        return this.getValue().profile;
    }

    get currentUserId(): number {
        return this.getValue().profile.id;
    }

    get companionGetter(): UserProps {
        return this.getValue().companion;
    }

    get detailUserGetter(): UserProps {
        return this.getValue().detailUser;
    }

    get searchGetter(): {
        position: string;
        gender: string;
        birthYear: string;
        birthPlace: string;
        agency: string;
        work: string;
        hobby: string;
        brothersAndSisters: string;
        educationalBackground: string;
        secondLanguage: string;
        holiday: string;
        instrument: string;
        sport: string;
        isDrinking: boolean;
        isSmoking: boolean;
        hasPet: boolean;
        isMarried: boolean;
    } {
        return this.getValue().search;
    }

    get userIdGetter(): any {
        return this.getValue().userId;
    }

    getUserById(userId: number): UserProps | undefined {
        const user = this.getEntity(userId);
        if (!user) {
            return;
        }
        return user;
    }
}
