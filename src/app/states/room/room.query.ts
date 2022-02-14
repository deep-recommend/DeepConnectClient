import { Injectable } from '@angular/core'
import { QueryEntity } from '@datorama/akita'
import { RoomStore, RoomState } from './room.store'

@Injectable({ providedIn: 'root' })
export class RoomQuery extends QueryEntity<RoomState> {
    rooms$ = this.selectAll();
    ui$ = this.select('ui')
    isRoom$ = this.select((state) => state.ui.isRoom)
    currentRoomId$ = this.select((state) => state.ui.currentRoomId)

    constructor(protected store: RoomStore) {
        super(store)
    }

    get currentRoomIdGetter(): number {
        return this.getValue().ui.currentRoomId
    }
}
