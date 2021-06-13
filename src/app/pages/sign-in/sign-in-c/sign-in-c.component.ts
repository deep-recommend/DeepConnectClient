import { Component, OnInit } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import * as _ from 'lodash';
import { AuthenticationService } from 'src/app/general/services/authentication.service';
import { SignInProps } from 'src/app/general/interfaces/sign-in.interface';
import { mergeMap } from 'rxjs/operators';
import { Router } from '@angular/router';
import { UiQuery } from 'src/app/states/ui';

@Component({
    selector: 'app-sign-in-c',
    templateUrl: './sign-in-c.component.html',
    styleUrls: ['./sign-in-c.component.scss'],
})
export class SignInCComponent implements OnInit {
    errMsg$: Observable<string> = this.uiQuery.authErrMsg$;

    constructor(
        private readonly authService: AuthenticationService,
        private readonly router: Router,
        private readonly uiQuery: UiQuery
    ) {}

    ngOnInit(): void {}

    onReceivedClickSignIn(signIn: SignInProps): void {
        this.authService
            .signInRequest(signIn)
            .pipe(mergeMap(() => this.router.navigate(['/dashboard'])))
            .subscribe(() => {});
    }
}
