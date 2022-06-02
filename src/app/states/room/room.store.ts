import { Injectable } from '@angular/core';
import { EntityState, EntityStore, StoreConfig } from '@datorama/akita';
import { currentRoomIdKey } from '../../general/utilities/local-strage';
import { RoomProps } from './room.model';

export interface RoomState extends EntityState<RoomProps> {
    ui: {
        currentRoom: RoomProps;
        currentRoomId: number;
    };
}

const initialState = {
    ui: {
        currentRoom: {
            id: 0,
            userA: 0,
            userB: 0,
        },
        currentRoomId: 0,
    },
};

@Injectable({ providedIn: 'root' })
@StoreConfig({
    name: 'room',
})
export class RoomStore extends EntityStore<RoomState> {
    constructor() {
        super(initialState);
    }

    setRooms(rooms: RoomProps[]): void {
        this.set(rooms);
    }

    updateCurrentRoom(room: RoomProps): void {
        if (!room) return;

        this.updateCurrentRoomId(room?.id);
        this.update({
            ui: {
                ...this.getValue().ui,
                currentRoom: room,
            },
        });
    }

    updateCurrentRoomId(currentRoomId: number): void {
        localStorage.setItem(currentRoomIdKey, String(currentRoomId));
        this.update({
            ui: {
                ...this.getValue().ui,
                currentRoomId: currentRoomId,
            },
        });
    }
}
