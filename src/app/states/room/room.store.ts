import { Injectable } from '@angular/core';
import { EntityState, EntityStore, StoreConfig } from '@datorama/akita';
import { RoomProps } from './room.model';

export interface RoomState extends EntityState<RoomProps> {
    ui: {
        isRoom: boolean;
        currentRoomId: number;
    };
}

const initialState = {
    ui: {
        isRoom: Boolean(),
        currentRoomId: Number(),
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

    updateRoomToTrue(): void {
        this.update({
            ui: {
                ...this.getValue().ui,
                isRoom: true,
            },
        });
    }

    updateRoomToFalse(): void {
        this.update({
            ui: {
                ...this.getValue().ui,
                isRoom: false,
            },
        });
    }

    updateCurrentRoomId(currentRoomId: number): void {
        this.update({
            ui: {
                ...this.getValue().ui,
                currentRoomId: currentRoomId,
            },
        });
    }
}
