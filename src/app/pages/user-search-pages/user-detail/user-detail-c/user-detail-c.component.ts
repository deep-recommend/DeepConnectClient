import { Component, OnInit } from '@angular/core'
import { Observable } from 'rxjs'
import { SocketEmitterService } from 'src/app/general/services/socket/socket-emitter.service'
import { SocketReceiverService } from 'src/app/general/services/socket/socket-receiver.service'
import { userDetailIdKey } from 'src/app/general/utilities/local-strage'
import { UserProps, UserQuery, UserService } from 'src/app/states/user'

@Component({
    selector: 'app-user-detail-c',
    templateUrl: './user-detail-c.component.html',
    styleUrls: ['./user-detail-c.component.scss'],
})
export class UserDetailCComponent implements OnInit {
    profile: UserProps = this.userQuery.profileGetter
    detailUser: UserProps = this.userQuery.detailUserGetter
    detailUser$: Observable<UserProps> = this.userQuery.detailUser$
    currentUserId$: Observable<string> = this.userQuery.currentUserId$

    constructor(
        private readonly userService: UserService,
        private readonly userQuery: UserQuery,
        private readonly socketEmitter: SocketEmitterService,
        private readonly socketReceiver: SocketReceiverService
    ) {}

    ngOnInit(): void {
        this.userService.getOnlyUserRequest(String(localStorage.getItem(userDetailIdKey))).subscribe()
    }

    onReceivedClickLikeButton(userId: string): void {
        console.log('like to ' + userId)
        const value = {
            currentUserId: this.profile._id,
            userId: userId,
        }
        this.socketEmitter.emitLike(value)
        this.socketReceiver.receivedLike()
    }

    onReceivedClickUnlikeButton(userId: string): void {
        console.log('unlike to ' + userId)
        const query = {
            currentUserId: this.profile._id,
            userId: userId,
        }
        this.socketEmitter.emitUnlike(query)
        this.socketReceiver.receivedUnlike()
    }
}
