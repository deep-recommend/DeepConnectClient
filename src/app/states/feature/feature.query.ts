import { Injectable } from '@angular/core';
import { QueryEntity } from '@datorama/akita';
import { FeatureStore, FeatureState } from './feature.store';

@Injectable({ providedIn: 'root' })
export class FeatureQuery extends QueryEntity<FeatureState> {

  constructor(protected store: FeatureStore) {
    super(store);
  }

}
