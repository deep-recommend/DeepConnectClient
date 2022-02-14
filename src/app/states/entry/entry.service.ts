import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CreateEntryDto } from 'src/app/libs/entry/infrastructure/dto/create-entry.dto';
import { EntryDto } from 'src/app/libs/entry/infrastructure/dto/entry.dto';
import { useEntry } from 'src/app/libs/entry/usercase/entry.service';

@Injectable({ providedIn: 'root' })
export class EntryService {
    constructor(private readonly useEntry: useEntry) {}

    getEntriesRequestByProfile(): Observable<EntryDto[]> {
        return this.useEntry.findManyByProfile();
    }

    getEntriesRequestByCompanion(): Observable<EntryDto[]> {
        return this.useEntry.findManyByCompanion();
    }

    getEntriesRequestByProfileNotObservable(): Promise<EntryDto[]> {
        return this.useEntry.findManyByProfileToPromise();
    }

    getEntriesRequestByCompanionNotObservable(): Promise<EntryDto[]> {
        return this.useEntry.findManyByCompanionToPromise();
    }

    postEntryRequest(entry: CreateEntryDto): Observable<EntryDto> {
        return this.useEntry.create(entry);
    }
}
