import { Component, OnInit } from '@angular/core'
import { Router } from '@angular/router'
import { Observable } from 'rxjs'
import { UpdateProfileProps } from 'src/app/general/interfaces/update-profile.interface'
import { AuthenticationService } from 'src/app/general/services/authentication.service'
import { UserProps, UserQuery, UserService, UserStore } from 'src/app/states/user'

@Component({
    selector: 'app-my-page-setting-c',
    templateUrl: './my-page-setting-c.component.html',
    styleUrls: ['./my-page-setting-c.component.scss'],
})
export class MyPageSettingCComponent implements OnInit {
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
        this.authenticationService.getProfile().subscribe((data) => {
            console.log('profile', data)
        })
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
