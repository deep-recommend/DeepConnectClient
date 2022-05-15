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

    get currentRoom(): RoomProps {
        return this.getValue().ui.currentRoom;
    }

    get currentRoomId(): any {
        return this.getValue().ui.currentRoomId;
    }

    getById(id: number): RoomProps | undefined {
        return this.getEntity(id);
    }

    getByUserId(currentUserId: number, userId: number): RoomProps | undefined {
        const room = this.getAll().find(
            (room) =>
                (room.userA === currentUserId && room.userB === userId) ||
                (room.userA === userId && room.userB === currentUserId)
        );

        return room;
    }
}
