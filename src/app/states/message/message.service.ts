import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { apiMessageUrl, httpOptions } from 'src/app/general/utilities/api';
import { RoomQuery } from '../room/room.query';
import { MessageProps } from './message.model';
import { MessageStore } from './message.store';

@Injectable({ providedIn: 'root' })
export class MessageService {
    private get _paramKeys(): string[] {
        return ['roomId'];
    }

    private get _paramValues(): string[] {
        return [this.roomQuery.currentRoomIdGetter.toString()];
    }

    constructor(
        private readonly messageStore: MessageStore,
        private readonly http: HttpClient,
        private readonly roomQuery: RoomQuery
    ) {}

    getMessagesRequest(): Observable<MessageProps[]> {
        return this.http
            .get<MessageProps[]>(
                apiMessageUrl,
                httpOptions(this._paramKeys, this._paramValues)
            )
            .pipe(tap((data) => this.messageStore.setMessages(data)));
    }
}
