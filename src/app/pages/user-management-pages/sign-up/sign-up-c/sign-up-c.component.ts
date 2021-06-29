import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { mergeMap } from 'rxjs/operators';
import { SignUpProps } from 'src/app/general/interfaces/sign-up.interface';
import { UserQuery, UserService } from 'src/app/states/user';

@Component({
    selector: 'app-sign-up-c',
    templateUrl: './sign-up-c.component.html',
    styleUrls: ['./sign-up-c.component.scss'],
})
export class SignUpCComponent implements OnInit {
    genders$: Observable<string[]> = this.userQuery.genders$;
    years$: Observable<number[]> = this.userQuery.years$;
    months$: Observable<number[]> = this.userQuery.months$;
    days$: Observable<number[]> = this.userQuery.days$;
    birthPlaces$: Observable<string[]> = this.userQuery.birthPlaces$;

    constructor(
        private readonly userService: UserService,
        private readonly router: Router,
        private readonly userQuery: UserQuery
    ) {}

    ngOnInit(): void {}

    onReceivedClickSignUp(signUp: SignUpProps): void {
        this.userService
            .postUserRequest(signUp)
            .pipe(mergeMap(() => this.router.navigate(['/'])))
            .subscribe(() => {});
    }
}
