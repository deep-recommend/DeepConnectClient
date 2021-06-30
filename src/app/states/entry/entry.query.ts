import { Injectable } from '@angular/core';
import { QueryEntity } from '@datorama/akita';
import { EntryProps } from './entry.model';
import { EntryStore, EntryState } from './entry.store';

@Injectable({ providedIn: 'root' })
export class EntryQuery extends QueryEntity<EntryState> {
    profileEntries$ = this.select('profileEntries');
    companionEntries$ = this.select('companionEntries');

    constructor(protected store: EntryStore) {
        super(store);
    }

    get profileEntriesGetter(): EntryProps[] {
        return this.getValue().profileEntries;
    }

    get companionEntriesGetter(): EntryProps[] {
        return this.getValue().companionEntries;
    }
}
