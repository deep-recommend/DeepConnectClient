import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { apiRoomUrl, httpHeaders } from 'src/app/general/utilities/api';
import { RoomProps } from './room.model';
import { RoomStore } from './room.store';

@Injectable({ providedIn: 'root' })
export class RoomService {
    private readonly _apiRoomUrl = apiRoomUrl;
    private readonly _httpHeaders = httpHeaders;

    constructor(private readonly roomStore: RoomStore, private readonly http: HttpClient) {}

    getOnlyRoomRequest(roomId: string): Observable<RoomProps> {
        const url = `${this._apiRoomUrl}/${roomId}`;
        return this.http.get<RoomProps>(url, this._httpHeaders);
    }

    postRoomRequest(): Observable<RoomProps> {
        return this.http.post<RoomProps>(this._apiRoomUrl, this._httpHeaders);
    }
}
