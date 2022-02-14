import { Injectable } from '@angular/core';
import { EntityState, EntityStore, StoreConfig } from '@datorama/akita';
import { EntryDto } from 'src/app/libs/entry/infrastructure/dto/entry.dto';

export interface EntryState extends EntityState<EntryDto> {
    ui: {};
    profileEntries: EntryDto[];
    companionEntries: EntryDto[];
}

const initialState = {
    ui: {},
    profileEntries: Array(),
    companionEntries: Array(),
};

@Injectable({ providedIn: 'root' })
@StoreConfig({
    name: 'entry',
})
export class EntryStore extends EntityStore<EntryState> {
    constructor() {
        super(initialState);
    }

    setEntries(entries: EntryDto[]): void {
        this.set(entries);
    }

    updateProfileEntries(profileEntries: EntryDto[]): void {
        this.update({
            ...this.getValue().profileEntries,
            profileEntries,
        });
    }

    updateCompanionEntries(companionEntries: EntryDto[]): void {
        this.update({
            ...this.getValue().companionEntries,
            companionEntries,
        });
    }
}
