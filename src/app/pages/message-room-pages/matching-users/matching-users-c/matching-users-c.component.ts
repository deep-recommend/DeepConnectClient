import { Component } from '@angular/core'
import { Router } from '@angular/router'
import { Observable } from 'rxjs'
import { ProgressSpinnerService } from 'src/app/general/components/progress-spinner/progress-spinner.service'
import { RoomProps } from 'src/app/states/room/room.model'
import { RoomQuery } from 'src/app/states/room/room.query'
import { UserQuery } from 'src/app/states/user/user.query'
import { UserService } from 'src/app/states/user/user.service'
import { UserStore } from 'src/app/states/user/user.store'

@Component({
    selector: 'app-matching-users-c',
    templateUrl: './matching-users-c.component.html',
    styleUrls: ['./matching-users-c.component.scss'],
})
export class MatchingUsersCComponent {
    existsMatchingUsers$: Observable<boolean> = this.userQuery.existsMatchingUsers$

    rooms$: Observable<RoomProps[]> = this.roomQuery.rooms$;

    profileGetter = this.userQuery.profileGetter

    constructor(
        private readonly userService: UserService,
        private readonly userQuery: UserQuery,
        private readonly router: Router,
        private readonly userStore: UserStore,
        private readonly spinner: ProgressSpinnerService,
        private readonly roomQuery: RoomQuery,
    ) {}

    onReceivedClickUserToMessage(userId: number): void {
        this.spinner.open()

        this.userService.getCompanionRequest(userId).subscribe(() => {
            this.userStore.updateUserId(userId)
            this.router.navigate([`/message-room/${userId}`])
        })
    }
}
