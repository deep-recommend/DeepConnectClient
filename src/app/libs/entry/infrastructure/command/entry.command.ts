import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { apiEntryUrl, httpHeaders } from 'src/app/general/utilities/api';
import { CreateEntryDto } from '../dto/create-entry.dto';
import { EntryDto } from '../dto/entry.dto';

@Injectable({ providedIn: 'root' })
export class EntryCommand {
    constructor(private readonly http: HttpClient) {}

    create(entry: CreateEntryDto): Observable<EntryDto> {
        return this.http.post<EntryDto>(apiEntryUrl, entry, httpHeaders);
    }
}
