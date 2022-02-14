import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {
    apiEntryUrl,
    httpHeaders,
    httpOptions,
} from 'src/app/general/utilities/api';
import { EntryDto } from '../dto/entry.dto';

@Injectable({ providedIn: 'root' })
export class EntryQuery {
    constructor(private readonly http: HttpClient) {}

    findMany(paramValues?: string[]): Observable<EntryDto[]> {
        const paramKeys: string[] = ['userId'];

        if (!paramValues) {
            return this.http.get<EntryDto[]>(apiEntryUrl, httpHeaders);
        }

        return this.http.get<EntryDto[]>(
            apiEntryUrl,
            httpOptions(paramKeys, paramValues)
        );
    }
}
