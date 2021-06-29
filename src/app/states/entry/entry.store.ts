import { Injectable } from '@angular/core';
import { EntityState, EntityStore, StoreConfig } from '@datorama/akita';
import { EntryProps } from './entry.model';

export interface EntryState extends EntityState<EntryProps> {
    ui: {};
}

const initialState = {
    ui: {},
};

@Injectable({ providedIn: 'root' })
@StoreConfig({
    name: 'entry',
})
export class EntryStore extends EntityStore<EntryState> {
    constructor() {
        super(initialState);
    }

    setEntries(entries: EntryProps[]): void {
        this.set(entries);
    }
}
