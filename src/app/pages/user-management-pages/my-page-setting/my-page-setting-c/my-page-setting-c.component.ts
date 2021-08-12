import { Component, OnDestroy, OnInit } from '@angular/core'
import { Router } from '@angular/router'
import { Observable, Subscription } from 'rxjs'
import { UpdateProfileProps } from 'src/app/general/interfaces/update-profile.interface'
import { AuthenticationService } from 'src/app/general/services/authentication.service'
import { UserProps, UserQuery, UserService, UserStore } from 'src/app/states/user'

@Component({
    selector: 'app-my-page-setting-c',
    templateUrl: './my-page-setting-c.component.html',
    styleUrls: ['./my-page-setting-c.component.scss'],
})
export class MyPageSettingCComponent implements OnInit, OnDestroy {
    subscriptions: Subscription[] = []

    positions$: Observable<string[]> = this.userQuery.positions$
    genders$: Observable<string[]> = this.userQuery.genders$
    years$: Observable<number[]> = this.userQuery.years$
    months$: Observable<number[]> = this.userQuery.months$
    days$: Observable<number[]> = this.userQuery.days$
    birthPlaces$: Observable<string[]> = this.userQuery.birthPlaces$
    profile$: Observable<UserProps> = this.userQuery.profile$

    currentUserId: string = this.userQuery.currentUserId

    constructor(
        private readonly userQuery: UserQuery,
        private readonly userService: UserService,
        private readonly authenticationService: AuthenticationService,
        private readonly router: Router
    ) {}

    ngOnInit(): void {
        this.subscriptions.push(this.authenticationService.getProfile().subscribe())
    }

    ngOnDestroy(): void {
        this.subscriptions.forEach((sub) => sub.unsubscribe())
    }

    onReceivedClickProfileUpdate(user: UpdateProfileProps): void {
        this.userService.updateUserRequest(this.currentUserId, user).subscribe(() => {
            location.reload()
        })
    }

    onReceivedClickBackToPrePage(): void {
        this.router.navigate(['/my-page'])
    }
}
