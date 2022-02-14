import { Injectable } from '@angular/core';
import { EntityState, EntityStore, StoreConfig } from '@datorama/akita';
import { FeatureProps } from './feature.model';

export interface FeatureState extends EntityState<FeatureProps> {
    ui: {};
}

const initialState = {
    ui: {},
};

@Injectable({ providedIn: 'root' })
@StoreConfig({
    name: 'feature',
})
export class FeatureStore extends EntityStore<FeatureState> {
    constructor() {
        super(initialState);
    }
}
