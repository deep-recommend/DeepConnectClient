import { Component } from '@angular/core'
import { Router } from '@angular/router'
import { Observable } from 'rxjs'
import { UserSearchProps } from 'src/app/general/interfaces/user-search.interface'
import { UserQuery } from 'src/app/states/user/user.query'
import { UserStore } from 'src/app/states/user/user.store'

@Component({
    selector: 'app-search-c',
    templateUrl: './search-c.component.html',
    styleUrls: ['./search-c.component.scss'],
})
export class SearchCComponent {
    positions$: Observable<string[]> = this.userQuery.positions$
    genders$: Observable<string[]> = this.userQuery.genders$
    years$: Observable<number[]> = this.userQuery.years$
    months$: Observable<number[]> = this.userQuery.months$
    days$: Observable<number[]> = this.userQuery.days$
    birthPlaces$: Observable<string[]> = this.userQuery.birthPlaces$
    brothersAndSisters$: Observable<string[]> = this.userQuery.brothersAndSisters$
    holiday$: Observable<string[]> = this.userQuery.holiday$

    constructor(
        private readonly userQuery: UserQuery,
        private readonly router: Router,
        private readonly userStore: UserStore
    ) {}

    onReceivedSubmitUserSearch(searchFormValue: UserSearchProps): void {
        this.userStore.updateSearch({
            ...this.userQuery.searchGetter,
            gender: searchFormValue.gender ?? '',
            birthYear: searchFormValue.birthYear ?? '',
            height: searchFormValue.height ?? '',
            birthPlace: searchFormValue.birthPlace ?? '',
            agency: searchFormValue.agency ?? '',
            work: searchFormValue.work ?? '',
            hobby: searchFormValue.hobby ?? '',
            brothersAndSisters: searchFormValue.brothersAndSisters ?? '',
            educationalBackground: searchFormValue.educationalBackground ?? '',
            secondLanguage: searchFormValue.secondLanguage ?? '',
            holiday: searchFormValue.holiday ?? '',
            instrument: searchFormValue.instrument ?? '',
            sport: searchFormValue.sport ?? '',
            isDrinking: searchFormValue.isDrinking ?? undefined,
            isSmoking: searchFormValue.isSmoking ?? undefined,
            hasPet: searchFormValue.hasPet ?? undefined,
            isMarried: searchFormValue.isMarried ?? undefined,
        })
        this.router.navigate(['/'])
    }
}
