import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { Observable } from 'rxjs'
import { tap } from 'rxjs/operators'
import { apiMessageUrl, httpOptions } from 'src/app/general/utilities/api'
import { RoomQuery } from '../room'
import { MessageProps } from './message.model'
import { MessageStore } from './message.store'

@Injectable({ providedIn: 'root' })
export class MessageService {
    constructor(
        private readonly messageStore: MessageStore,
        private readonly http: HttpClient,
        private readonly roomQuery: RoomQuery
    ) {}

    getMessagesRequest(): Observable<MessageProps[]> {
        const paramKeys: string[] = ['roomId']
        const paramValues: string[] = [this.roomQuery.currentRoomIdGetter]

        return this.http
            .get<MessageProps[]>(apiMessageUrl, httpOptions(paramKeys, paramValues))
            .pipe(tap((data) => this.messageStore.setMessages(data)))
    }
}
