import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { HttpClientOptions } from '../interfaces/http-client-options.interface';

@Injectable({
    providedIn: 'root',
})
export class HttpClientService {
    constructor(public http: HttpClient) {}

    get(url: string, options?: HttpClientOptions): Observable<any> {
        return this.http.get(url, options);
    }

    post(url: string, body: any, options?: HttpClientOptions): Observable<any> {
        return this.http.post(url, body, options);
    }

    put(url: string, body: any, options?: HttpClientOptions): Observable<any> {
        return this.http.put(url, body, options);
    }

    delete(url: string, options?: HttpClientOptions): Observable<any> {
        return this.http.delete(url, options);
    }
}
