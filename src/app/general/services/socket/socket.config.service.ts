import { Injectable } from '@angular/core';
import { apiHostPort } from '../../utilities/api';
import { io } from 'socket.io-client';
import { Observable } from 'rxjs';
@Injectable({
    providedIn: 'root',
})
export class SocketService {
    private _socket: any;
    private _apiHostPort = 'http://localhost:3501';

    constructor() {
        this.connect();
    }

    /**
     * Socket.ioに接続
     */
    connect(): void {
        console.log('Socket connect');
        this._socket = io(this._apiHostPort);
    }

    /**
     * Socket.ioの接続を止める
     */
    disconnect(): void {
        if (!this._socket) {
            return;
        }
        console.log('Socket disconnect');
        this._socket.disconnect();
    }

    /**
     * Socket.io Emitter
     * @param emitName
     * @param data
     * @param callBack
     */
    emit(emitName: string, data?: any): void {
        this.connect();
        this._socket.emit(emitName, data);
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
