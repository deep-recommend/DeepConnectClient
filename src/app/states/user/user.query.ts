import { Injectable } from '@angular/core'
import { QueryEntity } from '@datorama/akita'
import { UserProps } from './user.model'
import { UserStore, UserState } from './user.store'

@Injectable({ providedIn: 'root' })
export class UserQuery extends QueryEntity<UserState> {
    users$ = this.selectAll()

    profile$ = this.select('profile')
    currentUserId$ = this.select((state) => state.profile._id)

    companion$ = this.select('companion')
    detailUser$ = this.select('detailUser')

    ui$ = this.select('ui')
    positions$ = this.select((state) => state.ui.positions)
    genders$ = this.select((state) => state.ui.genders)
    years$ = this.select((state) => state.ui.years)
    months$ = this.select((state) => state.ui.months)
    days$ = this.select((state) => state.ui.days)
    birthPlaces$ = this.select((state) => state.ui.birthPlaces)
    brothersAndSisters$ = this.select((state) => state.ui.brothersAndSisters)
    holiday$ = this.select((state) => state.ui.holiday)

    search$ = this.select('search')

    constructor(protected store: UserStore) {
        super(store)
    }

    get profileGetter(): UserProps {
        return this.getValue().profile
    }

    get currentUserId(): string {
        return this.getValue().profile._id
    }

    get companionGetter(): UserProps {
        return this.getValue().companion
    }

    get detailUserGetter(): UserProps {
        return this.getValue().detailUser
    }

    get searchGetter(): any {
        return this.getValue().search
    }

    get userIdGetter(): any {
        return this.getValue().userId
    }

    getUserById(userId: string): UserProps | undefined {
        return this.getEntity(userId)
    }
}
