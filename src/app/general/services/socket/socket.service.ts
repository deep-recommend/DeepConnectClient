import { Injectable } from '@angular/core';
import { accessTokenKey, apiUrl } from '../../utilities/api';
import io from 'socket.io-client';
import * as R from 'ramda';
import { ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class SocketService {
    private _socket: any;
    private _apiUrl = apiUrl;
    private _accessTokenKey = accessTokenKey;

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): any {
        this.connect(String(localStorage.getItem(this._accessTokenKey)));
    }

    constructor() {}

    /**
     * Socket.ioに接続
     * @param token
     */
    connect(token: string): void {
        this._socket = io(this._apiUrl, { query: { token: token } });
    }

    /**
     * Socket.ioの接続を止める
     * @param token
     */
    disconnect(): void {
        if (!this._socket) {
            return;
        }
        this._socket.disconnect();
    }

    /**
     * Socket.io Emitter
     * @param emitName
     * @param data
     * @param callBack
     */
    emit(emitName: string, data?: any, callBack?: any): void {
        if (!R.prop(this._accessTokenKey)(data)) {
            data = R.assoc(accessTokenKey, localStorage.getItem(accessTokenKey))(data);
        }
        if (callBack) {
            this._socket.emit(emitName, data, callBack);
        } else {
            this._socket.emit(emitName, data);
        }
    }

    /**
     * Socket.io Receiver
     * @param onName
     */
    on(onName: string): Observable<any> {
        const observable = new Observable((observer: any) => {
            this._socket.on(onName, (data: any) => {
                observer.next(data);
            });
            return () => {
                this._socket.disconnect();
            };
        });
        return observable;
    }
}
