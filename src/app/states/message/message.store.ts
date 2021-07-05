import { Injectable } from '@angular/core';
import { EntityState, EntityStore, StoreConfig } from '@datorama/akita';
import { MessageProps } from './message.model';

export interface MessageState extends EntityState<MessageProps> {
    ui: {};
}

const initialState = {
    ui: {},
};

@Injectable({ providedIn: 'root' })
@StoreConfig({
    name: 'message',
    idKey: '_id',
})
export class MessageStore extends EntityStore<MessageState> {
    constructor() {
        super(initialState);
    }

    setMessages(messages: MessageProps[]): void {
        this.set(messages);
    }
}
