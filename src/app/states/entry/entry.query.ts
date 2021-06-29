import { Injectable } from '@angular/core';
import { QueryEntity } from '@datorama/akita';
import { EntryStore, EntryState } from './entry.store';

@Injectable({ providedIn: 'root' })
export class EntryQuery extends QueryEntity<EntryState> {

  constructor(protected store: EntryStore) {
    super(store);
  }

}
