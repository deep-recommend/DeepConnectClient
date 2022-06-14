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
import { apiBlockUrl, httpHeaders } from '../general/utilities/api';

export interface BlockProps {
    id: number;
    userId: number;
    blockUserId: number;
}

export const blocksStore = createStore(
    { name: 'blocks' },
    withEntities<BlockProps>()
);

@Injectable({ providedIn: 'root' })
export class BlockService {
    constructor(
        private readonly http: HttpClient,
        private readonly httpService: HttpClientService
    ) {}

    getUsersAllRequest(): Observable<BlockProps[]> {
        return this.http
            .get<BlockProps[]>(apiBlockUrl, httpHeaders)
            .pipe(tap((data) => blocksStore.update(setEntities(data))));
    }
}

// blocksStore.pipe(selectAllEntities()).subscribe((blocks) => {
//     console.log(blocks);
// });

// blocksStore.update(
//     setEntities([
//         { id: 1, label: 'one ' },
//         { id: 2, label: 'two' },
//     ])
// );
