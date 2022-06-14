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
import { apiBlockUrl, httpHeaders } from '../general/utilities/api';
import { UserProps } from './user/user.model';

export interface BlockProps {
    id: number;
    userId: number;
    blockUserId: number;
    blockUser: UserProps;
}

export const blocksStore = createStore(
    { name: 'blocks' },
    withEntities<BlockProps>()
);

@Injectable({ providedIn: 'root' })
export class BlockService {
    constructor(private readonly http: HttpClient) {}

    getBlocks(): Observable<BlockProps[]> {
        return this.http
            .get<BlockProps[]>(apiBlockUrl, httpHeaders)
            .pipe(tap((data) => blocksStore.update(setEntities(data))));
    }
}
