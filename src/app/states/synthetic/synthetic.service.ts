import { Injectable } from '@angular/core';
import { NgEntityService } from '@datorama/akita-ng-entity-service';
import { SyntheticStore, SyntheticState } from './synthetic.store';

@Injectable({ providedIn: 'root' })
export class SyntheticService extends NgEntityService<SyntheticState> {

  constructor(protected store: SyntheticStore) {
    super(store);
  }

}
