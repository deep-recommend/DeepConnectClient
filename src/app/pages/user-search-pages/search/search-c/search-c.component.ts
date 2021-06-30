import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { UserQuery, UserService } from 'src/app/states/user';

@Component({
    selector: 'app-search-c',
    templateUrl: './search-c.component.html',
    styleUrls: ['./search-c.component.scss'],
})
export class SearchCComponent implements OnInit {
    genders$: Observable<string[]> = this.userQuery.genders$;
    years$: Observable<number[]> = this.userQuery.years$;
    months$: Observable<number[]> = this.userQuery.months$;
    days$: Observable<number[]> = this.userQuery.days$;
    birthPlaces$: Observable<string[]> = this.userQuery.birthPlaces$;

    constructor(
        private readonly userQuery: UserQuery,
        private readonly userService: UserService,
        private readonly router: Router
    ) {}

    ngOnInit(): void {}

    onReceivedSubmitUserSearch(searchFormValue: any): void {
        this.userService.getUsersRequest().subscribe(() => {
            this.router.navigate(['/']);
        });
    }
}
