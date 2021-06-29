import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MessageStore } from './message.store';

@Injectable({ providedIn: 'root' })
export class MessageService {
    constructor(private readonly messageStore: MessageStore, private readonly http: HttpClient) {}
}
