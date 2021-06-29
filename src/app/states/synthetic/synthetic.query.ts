import { Injectable } from '@angular/core';
import { QueryEntity } from '@datorama/akita';
import { SyntheticStore, SyntheticState } from './synthetic.store';

@Injectable({ providedIn: 'root' })
export class SyntheticQuery extends QueryEntity<SyntheticState> {

  constructor(protected store: SyntheticStore) {
    super(store);
  }

}
