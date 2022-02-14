import { Injectable } from '@angular/core';
import { QueryEntity } from '@datorama/akita';
import { EntryDto } from 'src/app/libs/entry/infrastructure/dto/entry.dto';
import { EntryStore, EntryState } from './entry.store';

@Injectable({ providedIn: 'root' })
export class EntryQuery extends QueryEntity<EntryState> {
    profileEntries$ = this.select('profileEntries');
    companionEntries$ = this.select('companionEntries');

    constructor(protected store: EntryStore) {
        super(store);
    }

    get profileEntriesGetter(): EntryDto[] {
        return this.getValue().profileEntries;
    }

    get companionEntriesGetter(): EntryDto[] {
        return this.getValue().companionEntries;
    }
}
