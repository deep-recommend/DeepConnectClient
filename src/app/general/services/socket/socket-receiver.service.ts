import { Injectable } from '@angular/core'
import { Socket } from 'ngx-socket-io'
import { mergeMap } from 'rxjs/operators'
import { LikeService } from 'src/app/states/like'
import { MessageService } from 'src/app/states/message'

@Injectable({
    providedIn: 'root',
})
export class SocketReceiverService {
    constructor(
        private readonly socket: Socket,
        private readonly messageService: MessageService,
        private readonly likeService: LikeService
    ) {}

    receiveAddMessage(): void {
        this.socket
            .fromEvent('pushMessage')
            .pipe(mergeMap(() => this.messageService.getMessagesRequest()))
            .subscribe(() => {
                this.messageService.getMessagesRequest().subscribe()
            })
    }

    receivedLike(): void {
        this.socket
            .fromEvent('liked')
            .pipe(mergeMap(() => this.likeService.getLikes()))
            .subscribe(() => {
                this.likeService.getLikes().subscribe()
            })
    }

    receivedUnlike(): void {
        this.socket
            .fromEvent('unliked')
            .pipe(mergeMap(() => this.likeService.getLikes()))
            .subscribe(() => {
                this.likeService.getLikes().subscribe()
            })
    }
}
