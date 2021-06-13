import { HttpErrorResponse } from '@angular/common/http';
import { ErrorHandler, Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class ErrorHandlerService implements ErrorHandler {
    constructor() {}

    handleError(err: HttpErrorResponse): Observable<never> {
        if (err.error instanceof ErrorEvent) {
            console.warn('ネットワークエラー');
        } else {
            switch (err.status) {
                case 400:
                    console.warn('不正な要求');
                    break;
                case 401:
                    console.warn('トークン認証エラー');
                    break;
                case 403:
                    console.warn('アクセス権限なし');
                    break;
                case 404:
                    console.warn('データが見つかりません');
                    break;
                case 422:
                    console.warn('バリデーションエラー');
                    break;
                case 500:
                    console.warn('サーバーエラー');
                    break;
                default:
                    break;
            }
        }
        return throwError('Ctrl + R');
    }
}
