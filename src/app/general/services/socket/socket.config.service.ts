import { Injectable } from '@angular/core';
import { apiHostPort } from '../../utilities/api';
import { io } from 'socket.io-client';
import { Observable } from 'rxjs';
import { Socket, SocketIoConfig } from 'ngx-socket-io';

@Injectable({
    providedIn: 'root',
})
export class SocketService {
    private _socket: any;
    private _apiHostPort = apiHostPort;

    constructor() {
        this.connect()
    }

    /**
     * Socket.ioに接続
     */
    connect(): void {
        console.log('connect works!')
        this._socket = io(this._apiHostPort);
    }

    /**
     * Socket.ioの接続を止める
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
        this._socket.emit(emitName, data, callBack);
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


const config: SocketIoConfig = {
  url: 'http://localhost:3500', options: {}
};

@Injectable({providedIn: 'root'})
export class CustomSocket extends Socket {
  constructor() {
    super(config)
  }
}