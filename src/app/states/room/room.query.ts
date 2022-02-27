import { Injectable } from '@angular/core';
import { QueryEntity } from '@datorama/akita';
import { RoomProps } from './room.model';
import { RoomStore, RoomState } from './room.store';

@Injectable({ providedIn: 'root' })
export class RoomQuery extends QueryEntity<RoomState> {
    rooms$ = this.selectAll();
    ui$ = this.select('ui');
    currentRoom$ = this.select((state) => state.ui.currentRoom);
    currentRoomId$ = this.select((state) => state.ui.currentRoomId);

    constructor(protected store: RoomStore) {
        super(store);
    }

    get currentRoomGetter(): RoomProps {
        return this.getValue().ui.currentRoom;
    }

    get currentRoomIdGetter(): number {
        return this.getValue().ui.currentRoomId;
    }
}
