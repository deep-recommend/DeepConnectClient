import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { HttpClientOptions } from '../interfaces/http-client-options.interface';
import { ErrorHandlerService } from './error-handler.service';

@Injectable({
    providedIn: 'root',
})
export class HttpClientService {
    constructor(public http: HttpClient, public err: ErrorHandlerService) {}

    get(url: string, options?: HttpClientOptions): Observable<any> {
        return this.http.get(url, options).pipe(catchError(this.err.handleError));
    }

    post(url: string, body: any, options?: HttpClientOptions): Observable<any> {
        return this.http.post(url, body, options).pipe(catchError(this.err.handleError));
    }

    put(url: string, body: any, options?: HttpClientOptions): Observable<any> {
        return this.http.put(url, body, options).pipe(catchError(this.err.handleError));
    }

    delete(url: string, options?: HttpClientOptions): Observable<any> {
        return this.http.delete(url, options).pipe(catchError(this.err.handleError));
    }
}
