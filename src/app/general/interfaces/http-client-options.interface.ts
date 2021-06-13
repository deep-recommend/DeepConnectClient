import { HttpHeaders, HttpParams } from '@angular/common/http';

export interface HttpClientOptions {
    headers?: HttpHeaders | { [header: string]: string | string[] };
    observe?: 'body';
    params?: HttpParams | { [param: string]: string | string[] };
    responseType?: 'json';
    withCredentials?: boolean;
}
