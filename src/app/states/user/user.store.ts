import { Injectable } from '@angular/core';
import { EntityState, EntityStore, StoreConfig } from '@datorama/akita';
import {
    currentUserIdKey,
    otherUserIdKey,
} from 'src/app/general/utilities/local-strage';
import { BROTHERS_AND_SISTERS } from 'src/app/general/utilities/select/brothers-and-sisters';
import { DAY, MONTH, YEAR } from 'src/app/general/utilities/select/date';
import { GENDER } from 'src/app/general/utilities/select/gender';
import { HOLIDAY } from 'src/app/general/utilities/select/holiday';
import { POSITION } from 'src/app/general/utilities/select/position';
import { PREFECTURE } from 'src/app/general/utilities/select/prefecture';
import { LangService } from '../../general/services/lang.service';
import { UserProps } from './user.model';

export interface UserState extends EntityState<UserProps> {
    ui: {
        positions: string[];
        genders: string[];
        years: number[];
        months: number[];
        days: number[];
        birthPlaces: string[];
        brothersAndSisters: string[];
        holiday: string[];
    };
    search: {
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
    };
    params: {
        roomId: number;
        userId: number;
    };
    profile: UserProps;
    companion: UserProps;
    detailUser: UserProps;
    userId: number;
    existsMatchingUsers: boolean;
}

const initialState = {
    ui: {
        positions: POSITION,
        genders: GENDER,
        years: YEAR,
        months: MONTH,
        days: DAY,
        birthPlaces: PREFECTURE,
        brothersAndSisters: BROTHERS_AND_SISTERS,
        holiday: HOLIDAY,
    },
    search: {
        position: '',
        gender: '',
        birthYear: '',
        height: '',
        birthPlace: '',
        agency: '',
        work: '',
        hobby: '',
        brothersAndSisters: '',
        educationalBackground: '',
        secondLanguage: '',
        holiday: '',
        instrument: '',
        sport: '',
        isDrinking: Boolean(undefined),
        isSmoking: Boolean(undefined),
        hasPet: Boolean(undefined),
        isMarried: Boolean(undefined),
    },
    params: {
        roomId: Number(undefined),
        userId: Number(undefined),
    },
    profile: undefined,
    companion: undefined,
    detailUser: undefined,
    userDetailId: Number(undefined),
    existsMatchingUsers: Boolean(undefined),
};

@Injectable({ providedIn: 'root' })
@StoreConfig({
    name: 'user',
})
export class UserStore extends EntityStore<UserState> {
    constructor(private readonly lang: LangService) {
        super(initialState);
    }

    setUsers(users: UserProps[]): void {
        this.set(users.map((user) => this.mapper(user)));
    }

    updateSearch(search: any): void {
        this.update((state) => ({
            search: {
                ...state.search,
                ...search,
            },
        }));
    }

    updateProfile(profile: UserProps): void {
        localStorage.setItem(currentUserIdKey, String(profile.id));
        this.update({
            ...this.getValue().profile,
            profile: this.mapper(profile),
        });
    }

    updateCompanion(companion: UserProps): void {
        this.update({
            ...this.getValue().companion,
            companion: this.mapper(companion),
        });
    }

    updateDetailUser(detailUser: UserProps): void {
        this.update({
            ...this.getValue().detailUser,
            detailUser: this.mapper(detailUser),
        });
    }

    updateUserId(userId: number): void {
        localStorage.setItem(otherUserIdKey, String(userId));
        this.update({ userId: userId });
    }

    updateExistsMatchingUsers(bool: boolean): void {
        this.update({ existsMatchingUsers: bool });
    }

    resetSearch(): void {
        this.update((state) => ({
            search: {
                ...state.search,
                position: '',
                gender: '',
                birthYear: '',
                height: '',
                birthPlace: '',
                agency: '',
                work: '',
                hobby: '',
                brothersAndSisters: '',
                educationalBackground: '',
                secondLanguage: '',
                holiday: '',
                instrument: '',
                sport: '',
                isDrinking: '',
                isSmoking: '',
                hasPet: '',
                isMarried: '',
            },
        }));
    }

    mapper(user: UserProps): UserProps {
        return {
            ...user,
            displayedName:
                user.stageName || user.realLastName + user.realFirstName,
        };
    }
}
