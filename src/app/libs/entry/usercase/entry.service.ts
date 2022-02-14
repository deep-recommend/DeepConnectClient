import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { EntryStore } from 'src/app/general/unused/store/entry/entry.store';
import { UserQuery } from 'src/app/states/user/user.query';
import { EntryCommand } from '../infrastructure/command/entry.command';
import { CreateEntryDto } from '../infrastructure/dto/create-entry.dto';
import { EntryDto } from '../infrastructure/dto/entry.dto';
import { EntryQuery } from '../infrastructure/query/entry.query';

@Injectable({ providedIn: 'root' })
export class useEntry {
    constructor(
        private readonly command: EntryCommand,
        private readonly query: EntryQuery,
        private readonly entryStore: EntryStore,
        private readonly userQuery: UserQuery
    ) {}

    findManyByProfile(): Observable<EntryDto[]> {
        const paramValues: string[] = [String(this.userQuery.profileGetter.id)];
        return this.query
            .findMany(paramValues)
            .pipe(tap((data) => this.entryStore.updateProfileEntries(data)));
    }

    findManyByCompanion(): Observable<EntryDto[]> {
        const paramValues: string[] = [
            String(this.userQuery.companionGetter.id),
        ];
        return this.query
            .findMany(paramValues)
            .pipe(tap((data) => this.entryStore.updateCompanionEntries(data)));
    }

    findManyByProfileToPromise(): Promise<EntryDto[]> {
        return this.query
            .findMany()
            .pipe(tap((data) => this.entryStore.updateProfileEntries(data)))
            .toPromise();
    }

    findManyByCompanionToPromise(): Promise<EntryDto[]> {
        return this.query
            .findMany()
            .pipe(tap((data) => this.entryStore.updateCompanionEntries(data)))
            .toPromise();
    }

    create(entry: CreateEntryDto): Observable<EntryDto> {
        return this.command.create(entry);
    }
}
