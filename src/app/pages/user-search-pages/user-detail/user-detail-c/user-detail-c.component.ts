import { Component, OnInit } from '@angular/core'
import { Observable } from 'rxjs'
import { userDetailIdKey } from 'src/app/general/utilities/local-strage'
import { UserProps, UserQuery, UserService } from 'src/app/states/user'

@Component({
    selector: 'app-user-detail-c',
    templateUrl: './user-detail-c.component.html',
    styleUrls: ['./user-detail-c.component.scss'],
})
export class UserDetailCComponent implements OnInit {
    detailUser$: Observable<UserProps> = this.userQuery.detailUser$
    detailUser: UserProps = this.userQuery.detailUserGetter

    constructor(private readonly userService: UserService, private readonly userQuery: UserQuery) {}

    ngOnInit(): void {
        this.userService.getOnlyUserRequest(String(localStorage.getItem(userDetailIdKey))).subscribe()
    }
}
