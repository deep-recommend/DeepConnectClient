import { Injectable } from '@angular/core';
import { EntityState, EntityStore, StoreConfig } from '@datorama/akita';
import { DAY, MONTH, YEAR } from 'src/app/general/utilities/date';
import { GENDER } from 'src/app/general/utilities/gender';
import { PREFECTURE } from 'src/app/general/utilities/prefecture';
import { ProfileProps, UserProps } from './user.model';

export interface UserState extends EntityState<UserProps> {
    ui: {
        genders: string[];
        years: number[];
        months: number[];
        days: number[];
        birthPlaces: string[];
    };
    params: {
        roomId: string;
        userId: string;
    };
    profile: ProfileProps;
    companion: UserProps;
}

const initialState = {
    ui: {
        genders: GENDER,
        years: YEAR,
        months: MONTH,
        days: DAY,
        birthPlaces: PREFECTURE,
    },
    params: {
        roomId: '',
        userId: '',
    },
    profile: undefined,
    companion: undefined,
};

@Injectable({ providedIn: 'root' })
@StoreConfig({
    name: 'user',
})
export class UserStore extends EntityStore<UserState> {
    constructor() {
        super(initialState);
    }

    setUsers(users: UserProps[]): void {
        this.set(users);
    }

    updateProfile(profile: ProfileProps): void {
        this.update({
            ...this.getValue().profile,
            profile,
        });
    }

    updateCompanion(companion: UserProps): void {
        this.update({
            ...this.getValue().companion,
            companion,
        });
    }
}
