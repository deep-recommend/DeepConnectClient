import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { apiEntryUrl, httpHeaders } from 'src/app/general/utilities/api';
import { EntryProps } from './entry.model';
import { EntryStore } from './entry.store';

@Injectable({ providedIn: 'root' })
export class EntryService {
    private readonly _apiEntryUrl = apiEntryUrl;
    private readonly _httpHeaders = httpHeaders;

    constructor(private readonly entryStore: EntryStore, private readonly http: HttpClient) {}

    getEntriesRequest(): Observable<EntryProps[]> {
        return this.http
            .get<EntryProps[]>(this._apiEntryUrl, this._httpHeaders)
            .pipe(tap((data) => this.entryStore.setEntries(data)));
    }

    postEntryRequest(entry: EntryProps): Observable<EntryProps> {
        return this.http.post<EntryProps>(this._apiEntryUrl, entry, this._httpHeaders);
    }
}
