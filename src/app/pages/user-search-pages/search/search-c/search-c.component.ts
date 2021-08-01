import { Component, OnInit } from '@angular/core'
import { Router } from '@angular/router'
import { Observable } from 'rxjs'
import { UserSearchProps } from 'src/app/general/interfaces/user-search.interface'
import { UserQuery, UserService, UserStore } from 'src/app/states/user'

@Component({
    selector: 'app-search-c',
    templateUrl: './search-c.component.html',
    styleUrls: ['./search-c.component.scss'],
})
export class SearchCComponent implements OnInit {
    positions$: Observable<string[]> = this.userQuery.positions$
    genders$: Observable<string[]> = this.userQuery.genders$
    years$: Observable<number[]> = this.userQuery.years$
    months$: Observable<number[]> = this.userQuery.months$
    days$: Observable<number[]> = this.userQuery.days$
    birthPlaces$: Observable<string[]> = this.userQuery.birthPlaces$

    constructor(
        private readonly userQuery: UserQuery,
        private readonly userService: UserService,
        private readonly router: Router,
        private readonly userStore: UserStore
    ) {}

    ngOnInit(): void {}

    onReceivedSubmitUserSearch(searchFormValue: UserSearchProps): void {
        console.log(searchFormValue)
        this.userStore.updateSearch({
            ...this.userQuery.searchGetter,
            gender: searchFormValue.gender ?? '',
            birthYear: searchFormValue.birthYear ?? '',
            birthPlace: searchFormValue.birthPlace ?? '',
            agency: searchFormValue.agency ?? '',
        })
        this.userService.getUsersRequest().subscribe(() => {
            this.router.navigate(['/'])
        })
    }
}
