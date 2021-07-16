import { Injectable } from '@angular/core'
import { EntityState, EntityStore, StoreConfig } from '@datorama/akita'
import { RoomProps } from './room.model'

export interface RoomState extends EntityState<RoomProps> {
    ui: {
        isRoom: boolean
        currentRoomId: string
    }
}

const initialState = {
    ui: {
        isRoom: false,
        currentRoomId: '',
    },
}

@Injectable({ providedIn: 'root' })
@StoreConfig({
    name: 'room',
    idKey: '_id',
})
export class RoomStore extends EntityStore<RoomState> {
    constructor() {
        super(initialState)
    }

    updateRoomToTrue(): void {
        this.update({
            ui: {
                ...this.getValue().ui,
                isRoom: true,
            },
        })
    }

    updateRoomToFalse(): void {
        this.update({
            ui: {
                ...this.getValue().ui,
                isRoom: false,
            },
        })
    }

    updateCurrentRoomId(currentRoomId: string): void {
        this.update({
            ui: {
                ...this.getValue().ui,
                currentRoomId: currentRoomId,
            },
        })
    }
}