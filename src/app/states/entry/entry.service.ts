import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { apiEntryUrl, httpHeaders, httpOptions } from 'src/app/general/utilities/api';
import { UserQuery } from '../user';
import { CreateEntryProps, EntryProps } from './entry.model';
import { EntryStore } from './entry.store';

@Injectable({ providedIn: 'root' })
export class EntryService {
    private readonly _apiEntryUrl = apiEntryUrl;
    private readonly _httpHeaders = httpHeaders;

    constructor(
        private readonly entryStore: EntryStore,
        private readonly http: HttpClient,
        private readonly userQuery: UserQuery
    ) {}

    getEntriesRequestByProfile(): Observable<EntryProps[]> {
        const paramKeys: string[] = ['userId'];
        const paramValues: string[] = [this.userQuery.profileGetter.user._id];

        return this.http
            .get<EntryProps[]>(this._apiEntryUrl, httpOptions(paramKeys, paramValues))
            .pipe(tap((data) => this.entryStore.updateProfileEntries(data)));
    }

    getEntriesRequestByCompanion(): Observable<EntryProps[]> {
        const paramKeys: string[] = ['userId'];
        const paramValues: string[] = [this.userQuery.companionGetter.id];

        return this.http
            .get<EntryProps[]>(this._apiEntryUrl, httpOptions(paramKeys, paramValues))
            .pipe(tap((data) => this.entryStore.updateCompanionEntries(data)));
    }

    getEntriesRequestByProfileNotObservable(): Promise<EntryProps[]> {
        const paramKeys: string[] = ['userId'];
        const paramValues: string[] = [this.userQuery.profileGetter.user._id];

        return this.http
            .get<EntryProps[]>(this._apiEntryUrl, httpOptions(paramKeys, paramValues))
            .pipe(tap((data) => this.entryStore.updateProfileEntries(data)))
            .toPromise();
    }

    getEntriesRequestByCompanionNotObservable(): Promise<EntryProps[]> {
        const paramKeys: string[] = ['userId'];
        const paramValues: string[] = [this.userQuery.companionGetter.id];

        return this.http
            .get<EntryProps[]>(this._apiEntryUrl, httpOptions(paramKeys, paramValues))
            .pipe(tap((data) => this.entryStore.updateCompanionEntries(data)))
            .toPromise();
    }

    postEntryRequest(entry: CreateEntryProps): Observable<EntryProps> {
        return this.http.post<EntryProps>(this._apiEntryUrl, entry, this._httpHeaders);
    }
}
