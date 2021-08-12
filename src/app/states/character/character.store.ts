import { Injectable } from '@angular/core'
import { EntityState, EntityStore, StoreConfig } from '@datorama/akita'
import { CharacterProps } from './character.model'

export interface CharacterState extends EntityState<CharacterProps> {}

@Injectable({ providedIn: 'root' })
@StoreConfig({
    name: 'character',
    idKey: '_id',
})
export class CharacterStore extends EntityStore<CharacterState> {
    constructor() {
        super()
    }
}
