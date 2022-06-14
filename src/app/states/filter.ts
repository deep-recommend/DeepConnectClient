import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { createStore } from '@ngneat/elf';
import {
    selectAllEntities,
    setEntities,
    withEntities,
} from '@ngneat/elf-entities';
import { tap } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { HttpClientService } from '../general/services/http-client.service';
import { apiFilterUrl, httpHeaders } from '../general/utilities/api';

export interface FilterProps {
    id: number;
    userId: number;
    filterUserId: number;
}

export const filtersStore = createStore(
    { name: 'filters' },
    withEntities<FilterProps>()
);

@Injectable({ providedIn: 'root' })
export class FilterService {
    constructor(
        private readonly http: HttpClient,
        private readonly httpService: HttpClientService
    ) {}

    getUsersAllRequest(): Observable<FilterProps[]> {
        return this.http
            .get<FilterProps[]>(apiFilterUrl, httpHeaders)
            .pipe(tap((data) => filtersStore.update(setEntities(data))));
    }
}

// filtersStore.pipe(selectAllEntities()).subscribe((filters) => {
//     console.log(filters);
// });

// filtersStore.update(
//     setEntities([
//         { id: 1, label: 'one ' },
//         { id: 2, label: 'two' },
//     ])
// );
