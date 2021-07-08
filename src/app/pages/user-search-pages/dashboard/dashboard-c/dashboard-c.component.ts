import { Component, OnInit } from '@angular/core'
import { Router } from '@angular/router'
import { Observable } from 'rxjs'
import { AuthenticationService } from 'src/app/general/services/authentication.service'
import { SocketEmitterService } from 'src/app/general/services/socket/socket-emitter.service'
import { SocketReceiverService } from 'src/app/general/services/socket/socket-receiver.service'
import { LikeProps, LikeQuery, LikeService } from 'src/app/states/like'
import { ProfileProps, UserProps, UserQuery, UserService } from 'src/app/states/user'

@Component({
    selector: 'app-dashboard-c',
    templateUrl: './dashboard-c.component.html',
    styleUrls: ['./dashboard-c.component.scss'],
})
export class DashboardCComponent implements OnInit {
    profile: ProfileProps = this.userQuery.profileGetter
    currentUserId: string = this.userQuery.currentUserId

    profile$: Observable<ProfileProps> = this.userQuery.profile$
    users$: Observable<UserProps[]> = this.userQuery.users$
    likes$: Observable<LikeProps[]> = this.likeQuery.likes$

    constructor(
        private readonly userService: UserService,
        private readonly userQuery: UserQuery,
        private readonly router: Router,
        private readonly likeService: LikeService,
        private readonly likeQuery: LikeQuery,
        private readonly socketEmitter: SocketEmitterService,
        private readonly socketReceiver: SocketReceiverService,
        private readonly authenticationService: AuthenticationService
    ) {}

    ngOnInit(): void {
        this.userService.getUsersRequest().subscribe()
        this.likeService.getLikes().subscribe()
        this.authenticationService.getProfile().subscribe()
    }

    onReceivedClickSearchField(): void {
        this.router.navigate(['/search'])
    }

    onReceivedClickLikeButton(userId: string): void {
        console.log('like to ' + userId)
        const value = {
            currentUserId: this.profile.user._id,
            userId: userId,
        }
        this.socketEmitter.emitLike(value)
        this.socketReceiver.receivedLike()
    }

    onReceivedClickUnlikeButton(userId: string): void {
        console.log('unlike to ' + userId)
        const query = {
            currentUserId: this.profile.user._id,
            userId: userId,
        }
        this.socketEmitter.emitUnlike(query)
        this.socketReceiver.receivedUnlike()
    }

    onReceivedClickUsersToDetail(userId: string): void {
        this.router.navigate([`user-detail/${userId}`])
    }
}
