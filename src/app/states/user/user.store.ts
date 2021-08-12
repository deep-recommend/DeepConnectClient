import { Injectable } from '@angular/core'
import { EntityState, EntityStore, StoreConfig } from '@datorama/akita'
import { userIdKey } from 'src/app/general/utilities/local-strage'
import { DAY, MONTH, YEAR } from 'src/app/general/utilities/select/date'
import { GENDER } from 'src/app/general/utilities/select/gender'
import { POSITION } from 'src/app/general/utilities/select/position'
import { PREFECTURE } from 'src/app/general/utilities/select/prefecture'
import { UserQuery } from '.'
import { UserProps } from './user.model'

export interface UserState extends EntityState<UserProps> {
    ui: {
        positions: string[]
        genders: string[]
        years: number[]
        months: number[]
        days: number[]
        birthPlaces: string[]
    }
    search: {
        position: string
        gender: string
        birthYear: string
        birthPlace: string
        agency: string
    }
    params: {
        roomId: string
        userId: string
    }
    profile: UserProps
    companion: UserProps
    detailUser: UserProps
    userId: string
}

const initialState = {
    ui: {
        positions: POSITION,
        genders: GENDER,
        years: YEAR,
        months: MONTH,
        days: DAY,
        birthPlaces: PREFECTURE,
    },
    search: {
        position: '',
        gender: '',
        birthYear: '',
        birthPlace: '',
        agency: '',
    },
    params: {
        roomId: '',
        userId: '',
    },
    profile: undefined,
    companion: undefined,
    detailUser: undefined,
    userDetailId: '',
}

@Injectable({ providedIn: 'root' })
@StoreConfig({
    name: 'user',
    idKey: '_id',
})
export class UserStore extends EntityStore<UserState> {
    constructor() {
        super(initialState)
    }

    setUsers(users: UserProps[]): void {
        this.set(users)
    }

    updateSearch(search: any): void {
        this.update((state) => ({
            search: {
                ...state.search,
                ...search,
            },
        }))
    }

    updateProfile(profile: UserProps): void {
        this.update({
            ...this.getValue().profile,
            profile,
        })
    }

    updateCompanion(companion: UserProps): void {
        this.update({
            ...this.getValue().companion,
            companion,
        })
    }

    updateDetailUser(detailUser: UserProps): void {
        this.update({
            ...this.getValue().detailUser,
            detailUser,
        })
    }

    updateUserId(userId: string): void {
        localStorage.setItem(userIdKey, userId)
        this.update({ userId: userId })
    }

    resetSearch(): void {
        this.update((state) => ({
            search: {
                ...state.search,
                position: '',
                gender: '',
                birthYear: '',
                birthPlace: '',
                agency: '',
            },
        }))
    }
}
