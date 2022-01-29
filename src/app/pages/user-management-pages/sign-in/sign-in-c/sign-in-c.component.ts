import { Component } from '@angular/core'
import { Observable } from 'rxjs'
import { AuthenticationService } from 'src/app/general/services/authentication.service'
import { SignInProps } from 'src/app/general/interfaces/sign-in.interface'
import { mergeMap } from 'rxjs/operators'
import { Router } from '@angular/router'
import { ProgressSpinnerService } from 'src/app/general/components/progress-spinner/progress-spinner.service'
import { UiQuery } from 'src/app/states/ui/ui.query'
import { UiStore } from 'src/app/states/ui/ui.store'

@Component({
    selector: 'app-sign-in-c',
    templateUrl: './sign-in-c.component.html',
    styleUrls: ['./sign-in-c.component.scss'],
})
export class SignInCComponent {
    errMsg$: Observable<string> = this.uiQuery.authErrMsg$

    constructor(
        private readonly authService: AuthenticationService,
        private readonly router: Router,
        private readonly uiQuery: UiQuery,
        private readonly uiStore: UiStore,
        private readonly spinner: ProgressSpinnerService
    ) {}

    onReceivedClickSignIn(signIn: SignInProps): void {
        this.authService
            .signInRequest(signIn)
            .pipe(
                mergeMap(() => this.router.navigate(['/'])),
                mergeMap(async () => this.uiStore.displayRoutingTab())
            )
            .subscribe()
    }
}
