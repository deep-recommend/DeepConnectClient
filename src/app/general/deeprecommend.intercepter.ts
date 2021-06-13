import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Router } from '@angular/router';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { DeepRecommendLocalStorageService } from './services/local-strage.service';

@Injectable()
export class DeepRecommendInterceptor implements HttpInterceptor {
    constructor(private readonly localStorage: DeepRecommendLocalStorageService, private readonly router: Router) {}
    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        let headers = request.headers;

        if (!headers.get('Content-Type')) {
            headers = headers.set('Content-Type', 'application/json');
        }

        const getToken = localStorage.getItem('アプリ名_access_token');

        if (getToken) {
            headers = headers.set('Authorization', `Bearer <${getToken}>`);
        }

        const req: HttpRequest<any> = request.clone({
            headers,
        });

        return next.handle(req).pipe(
            catchError((err) => {
                switch (err.status) {
                    case 401:
                        this.localStorage.removeItem('アプリ名_access_token');
                        this.router.navigate(['/login']);

                        return throwError(err);
                }
                return throwError(err);
            })
        );
    }
}
