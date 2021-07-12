import { Component, OnInit } from '@angular/core'
import { Router } from '@angular/router'
import { Observable } from 'rxjs'
import { UserProps, UserQuery, UserService } from 'src/app/states/user'

@Component({
    selector: 'app-my-page-c',
    templateUrl: './my-page-c.component.html',
    styleUrls: ['./my-page-c.component.scss'],
})
export class MyPageCComponent implements OnInit {
    profile$: Observable<UserProps> = this.userQuery.profile$

    constructor(
        private readonly userService: UserService,
        private readonly userQuery: UserQuery,
        private readonly router: Router
    ) {}

    ngOnInit(): void {
        this.userService.getUsersRequest().subscribe()
    }

    onReceivedClickToProfileSetting(): void {
        this.router.navigate(['my-page-setting'])
    }
}
