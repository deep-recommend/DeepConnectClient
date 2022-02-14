import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { apiRoomUrl, httpHeaders } from 'src/app/general/utilities/api';
import { RoomProps } from './room.model';
import { RoomStore } from './room.store';

@Injectable({ providedIn: 'root' })
export class RoomService {
    constructor(
        private readonly roomStore: RoomStore,
        private readonly http: HttpClient
    ) {}

    getRoomsRequest(): Observable<RoomProps[]> {
        return this.http
            .get<RoomProps[]>(apiRoomUrl, httpHeaders)
            .pipe(tap((rooms) => this.roomStore.setRooms(rooms)));
    }

    getOnlyRoomRequest(roomId: number): Observable<RoomProps> {
        const url = `${apiRoomUrl}/${roomId}`;
        return this.http.get<RoomProps>(url, httpHeaders);
    }

    postRoomRequest(): Observable<RoomProps> {
        return this.http.post<RoomProps>(apiRoomUrl, httpHeaders);
    }
}
