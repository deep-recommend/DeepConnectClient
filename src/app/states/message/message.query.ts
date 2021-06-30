import { Injectable } from '@angular/core';
import { QueryEntity } from '@datorama/akita';
import { MessageStore, MessageState } from './message.store';

@Injectable({ providedIn: 'root' })
export class MessageQuery extends QueryEntity<MessageState> {
    messages$ = this.selectAll();

    constructor(protected store: MessageStore) {
        super(store);
    }
}
