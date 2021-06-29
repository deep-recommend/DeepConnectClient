import { Injectable } from '@angular/core';
import { EntityState, EntityStore, StoreConfig } from '@datorama/akita';
import { RoomProps } from './room.model';

export interface RoomState extends EntityState<RoomProps> {
    ui: {};
}

const initialState = {
    ui: {},
};

@Injectable({ providedIn: 'root' })
@StoreConfig({
    name: 'room',
})
export class RoomStore extends EntityStore<RoomState> {
    constructor() {
        super(initialState);
    }
}
