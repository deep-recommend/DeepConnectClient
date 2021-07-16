import { Injectable } from '@angular/core'
import { EntityState, EntityStore, StoreConfig } from '@datorama/akita'
import { EntryProps } from './entry.model'

export interface EntryState extends EntityState<EntryProps> {
    ui: {}
    profileEntries: EntryProps[]
    companionEntries: EntryProps[]
}

const initialState = {
    ui: {},
    profileEntries: [],
    companionEntries: [],
}

@Injectable({ providedIn: 'root' })
@StoreConfig({
    name: 'entry',
    idKey: '_id',
})
export class EntryStore extends EntityStore<EntryState> {
    constructor() {
        super(initialState)
    }

    setEntries(entries: EntryProps[]): void {
        this.set(entries)
    }

    updateProfileEntries(profileEntries: EntryProps[]): void {
        this.update({
            ...this.getValue().profileEntries,
            profileEntries,
        })
    }

    updateCompanionEntries(companionEntries: EntryProps[]): void {
        this.update({
            ...this.getValue().companionEntries,
            companionEntries,
        })
    }
}