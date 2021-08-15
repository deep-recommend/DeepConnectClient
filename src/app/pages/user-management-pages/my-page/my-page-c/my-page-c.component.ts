import { Component, OnDestroy, OnInit } from '@angular/core'
import { Router } from '@angular/router'
import { Observable, Subscription } from 'rxjs'
import { AuthenticationService } from 'src/app/general/services/authentication.service'
import { accessTokenKey } from 'src/app/general/utilities/api'
import { UserProps, UserQuery, UserService } from 'src/app/states/user'

@Component({
    selector: 'app-my-page-c',
    templateUrl: './my-page-c.component.html',
    styleUrls: ['./my-page-c.component.scss'],
})
export class MyPageCComponent implements OnInit, OnDestroy {
    pageName: string | null | undefined

    subscriptions: Subscription[] = []

    profile$: Observable<UserProps> = this.userQuery.profile$

    constructor(
        private readonly userService: UserService,
        private readonly userQuery: UserQuery,
        private readonly router: Router,
        private readonly authenticationService: AuthenticationService
    ) {}

    ngOnInit(): void {
        this.pageName = 'マイページ'
        this.subscriptions.push(this.userService.getUsersRequest().subscribe())
        this.subscriptions.push(this.authenticationService.getProfile().subscribe())
    }

    ngOnDestroy(): void {
        this.subscriptions.forEach((sub) => sub.unsubscribe())
    }

    onReceivedClickToProfileSetting(): void {
        this.router.navigate(['my-page-setting'])
    }

    onReceivedClickSignOut(): void {
        if (localStorage.getItem(accessTokenKey)) {
            localStorage.removeItem(accessTokenKey)
            this.router.navigate(['/sign-in'])
        }
    }
}
