import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { accessTokenKey } from 'src/app/general/utilities/api';
import { UserProps } from 'src/app/states/user/user.model';
import { UserQuery } from 'src/app/states/user/user.query';

@Component({
    selector: 'app-my-page-c',
    templateUrl: './my-page-c.component.html',
    styleUrls: ['./my-page-c.component.scss'],
})
export class MyPageCComponent {
    profile$: Observable<UserProps> = this.userQuery.profile$;

    constructor(
        private readonly userQuery: UserQuery,
        private readonly router: Router
    ) {}

    onReceivedClickToProfileSetting(): void {
        this.router.navigate(['my-page-setting']);
    }

    onReceivedClickSignOut(): void {
        if (localStorage.getItem(accessTokenKey)) {
            localStorage.removeItem(accessTokenKey);
            this.router.navigate(['/sign-in']);
        }
    }
}
