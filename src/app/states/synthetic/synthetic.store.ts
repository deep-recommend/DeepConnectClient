import { Injectable } from '@angular/core';
import { EntityState, EntityStore, StoreConfig } from '@datorama/akita';
import { Synthetic } from './synthetic.model';

export interface SyntheticState extends EntityState<Synthetic> {}

@Injectable({ providedIn: 'root' })
@StoreConfig({
  name: 'synthetic'
})
export class SyntheticStore extends EntityStore<SyntheticState> {

  constructor() {
    super();
  }

}
