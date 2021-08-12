import { Observable, throwError } from 'rxjs'
import { catchError } from 'rxjs/operators'
import { Router } from '@angular/router'
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { DeepRecommendLocalStorageService } from './services/local-strage.service'
import { accessTokenKey } from './utilities/api'

@Injectable()
export class DeepRecommendInterceptor implements HttpInterceptor {
    constructor(private readonly localStorage: DeepRecommendLocalStorageService, private readonly router: Router) {
        const currentPath = location.pathname
        if (currentPath === '/sign-in') {
            return
        } else if (currentPath === '/sign-up') {
            return
        } else {
            return
        }
    }
    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        let headers = request.headers

        if (!headers.get('Content-Type')) {
            headers = headers.set('Content-Type', 'application/json')
        }

        const getToken = localStorage.getItem(accessTokenKey)

        if (getToken) {
            headers = headers.set('Authorization', `Bearer ${getToken}`)
        }

        const req: HttpRequest<any> = request.clone({
            headers,
        })

        return next.handle(req).pipe(
            catchError((err) => {
                if (err.error instanceof ErrorEvent) {
                    console.error('ネットワークエラー')
                } else {
                    switch (err.status) {
                        case 400:
                            console.error('不正な要求')
                            break
                        case 401:
                            console.error('トークン認証エラー')
                            this.router.navigate(['/sign-in'])
                            break
                        case 403:
                            console.error('アクセス権限なし')
                            break
                        case 404:
                            console.error('データが見つかりません')
                            break
                        case 422:
                            console.error('バリデーションエラー')
                            break
                        case 500:
                            console.error('サーバーエラー')
                            break
                        default:
                            break
                    }
                }
                return throwError('Ctrl + R')
            })
        )
    }
}
