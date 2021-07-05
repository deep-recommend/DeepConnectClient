import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import * as _ from 'lodash';
import { AuthenticationService } from 'src/app/general/services/authentication.service';
import { SignInProps } from 'src/app/general/interfaces/sign-in.interface';
import { mergeMap } from 'rxjs/operators';
import { Router } from '@angular/router';
import { UiQuery, UiStore } from 'src/app/states/ui';
import { SocketService } from 'src/app/general/services/socket/socket.config.service';

@Component({
    selector: 'app-sign-in-c',
    templateUrl: './sign-in-c.component.html',
    styleUrls: ['./sign-in-c.component.scss'],
})
export class SignInCComponent implements OnInit, OnDestroy {
    errMsg$: Observable<string> = this.uiQuery.authErrMsg$;

    constructor(
        private readonly authService: AuthenticationService,
        private readonly router: Router,
        private readonly uiQuery: UiQuery,
        private readonly uiStore: UiStore
    ) {}

    ngOnInit(): void {}

    ngOnDestroy(): void {
        this.uiStore.destroy();
    }

    onReceivedClickSignIn(signIn: SignInProps): void {
        this.authService
            .signInRequest(signIn)
            .pipe(mergeMap(() => this.router.navigate(['/'])))
            .subscribe();
    }
}
