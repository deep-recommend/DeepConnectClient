import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { Observable } from 'rxjs'
import { tap } from 'rxjs/operators'
import { apiNotificationUrl, httpOptions } from 'src/app/general/utilities/api'
import { UserQuery } from '../user'
import { NotificationProps } from './notification.model'
import { NotificationStore } from './notification.store'

@Injectable({ providedIn: 'root' })
export class NotificationService {
    constructor(
        private readonly notificationStore: NotificationStore,
        private readonly http: HttpClient,
        private readonly userQuery: UserQuery
    ) {}

    getNotifications(): Observable<NotificationProps[]> {
        const paramKeys: string[] = []
        const paramValues: string[] = []

        return this.http
            .get<NotificationProps[]>(apiNotificationUrl, httpOptions(paramKeys, paramValues))
            .pipe(
                tap((data) =>
                    this.notificationStore.setNotification(
                        data.filter((data) => data.userId === this.userQuery.profileGetter._id)
                    )
                )
            )
    }
}
