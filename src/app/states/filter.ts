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
import { apiFilterUrl, httpHeaders } from '../general/utilities/api';
import { UserProps } from './user/user.model';

export interface FilterProps {
    id: number;
    userId: number;
    filterUserId: number;
    filterUser: UserProps;
}

export const filtersStore = createStore(
    { name: 'filters' },
    withEntities<FilterProps>()
);

@Injectable({ providedIn: 'root' })
export class FilterService {
    constructor(private readonly http: HttpClient) {}

    getFilters(): Observable<FilterProps[]> {
        return this.http
            .get<FilterProps[]>(apiFilterUrl, httpHeaders)
            .pipe(tap((data) => filtersStore.update(setEntities(data))));
    }
}
