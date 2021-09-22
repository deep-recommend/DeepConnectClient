import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { Observable } from 'rxjs'
import { tap } from 'rxjs/operators'
import { apiNotificationUrl, httpHeaders } from 'src/app/general/utilities/api'
import { UserQuery } from '../user/user.query'
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
        return this.http.get<NotificationProps[]>(apiNotificationUrl, httpHeaders).pipe(
            tap((data) =>
                this.notificationStore.setNotification(
                    data.filter((data) => data.userId === this.userQuery.profileGetter.id)
                )
            ),
            tap((data) => this.notificationStore.updateExistsNotifications(data?.length !== 0))
        )
    }
}
