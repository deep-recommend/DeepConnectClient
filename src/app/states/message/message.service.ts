import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { apiMessageUrl, httpHeaders, httpOptions } from 'src/app/general/utilities/api';
import { RoomQuery } from '../room';
import { CreateMessageProps, MessageProps } from './message.model';
import { MessageStore } from './message.store';

@Injectable({ providedIn: 'root' })
export class MessageService {
    private readonly _apiMessageUrl = apiMessageUrl;
    private readonly _httpHeaders = httpHeaders;

    constructor(
        private readonly messageStore: MessageStore,
        private readonly http: HttpClient,
        private readonly roomQuery: RoomQuery
    ) {}

    getMessagesRequest(): Observable<MessageProps[]> {
        const paramKeys: string[] = ['roomId'];
        const paramValues: string[] = [this.roomQuery.currentRoomIdGetter];

        return this.http
            .get<MessageProps[]>(this._apiMessageUrl, httpOptions(paramKeys, paramValues))
            .pipe(tap((data) => this.messageStore.setMessages(data)));
    }

    postMessageRequest(message: CreateMessageProps): Observable<MessageProps> {
        return this.http.post<MessageProps>(this._apiMessageUrl, message, this._httpHeaders);
    }
}
