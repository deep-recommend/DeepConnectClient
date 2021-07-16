import { Component, OnInit } from '@angular/core'
import { Router } from '@angular/router'
import { Observable } from 'rxjs'
import { AuthenticationService } from 'src/app/general/services/authentication.service'
import { companionIdKey } from 'src/app/general/utilities/local-strage'
import { LikeProps, LikeService, LikeQuery } from 'src/app/states/like'
import { UserProps, UserService, UserQuery } from 'src/app/states/user'

@Component({
    selector: 'app-matched-c',
    templateUrl: './matched-c.component.html',
    styleUrls: ['./matched-c.component.scss'],
})
export class MatchedCComponent implements OnInit {
    currentUserId$: Observable<string> = this.userQuery.currentUserId$
    users$: Observable<UserProps[]> = this.userQuery.users$
    profile$: Observable<UserProps> = this.userQuery.profile$
    likes$: Observable<LikeProps[]> = this.likeQuery.likes$

    constructor(
        private readonly userService: UserService,
        private readonly userQuery: UserQuery,
        private readonly router: Router,
        private readonly authenticationService: AuthenticationService,
        private readonly likeService: LikeService,
        private readonly likeQuery: LikeQuery
    ) {}

    ngOnInit(): void {
        this.userService.getUsersRequest().subscribe()
        this.authenticationService.getProfile().subscribe()
        this.likeService.getLikes().subscribe()
    }

    onReceivedClickUserToMessage(userId: string): void {
        this.userService.getCompanionRequest(userId).subscribe(() => {
            localStorage.setItem(companionIdKey, userId)
            this.router.navigate([`/message-room/${userId}`])
        })
    }
}
