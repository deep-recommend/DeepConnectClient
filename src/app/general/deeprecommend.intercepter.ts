import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Router } from '@angular/router';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { DeepRecommendLocalStorageService } from './services/local-strage.service';
import { accessTokenKey } from './utilities/api';

@Injectable()
export class DeepRecommendInterceptor implements HttpInterceptor {
    constructor(private readonly localStorage: DeepRecommendLocalStorageService, private readonly router: Router) {
        const currentPath = location.pathname;
        if (currentPath === '/sign-in') {
            return;
        } else if (currentPath === '/sign-up') {
            return;
        } else {
            return;
        }
    }
    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        let headers = request.headers;

        if (!headers.get('Content-Type')) {
            headers = headers.set('Content-Type', 'application/json');
        }

        const getToken = localStorage.getItem(accessTokenKey);

        if (getToken) {
            headers = headers.set('Authorization', `Bearer ${getToken}`);
        }

        const req: HttpRequest<any> = request.clone({
            headers,
        });

        return next.handle(req).pipe(
            catchError((err) => {
                switch (err.status) {
                    case 400:
                        console.log('400');
                        break;
                    case 401:
                        this.localStorage.removeItem(accessTokenKey);
                        this.router.navigate(['/sign-in']);
                        break;
                    case 403:
                        console.log('403');
                        break;
                    case 404:
                        console.log('404');
                        break;
                    case 422:
                        console.log('422');
                        break;
                    case 500:
                        console.log('500');
                        break;
                    default:
                        break;
                }
                return throwError('Ctrl + R');
            })
        );
    }
}
