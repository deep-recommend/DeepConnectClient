import { Injectable } from '@angular/core'
import { Query } from '@datorama/akita'
import { Observable, timer } from 'rxjs'
import { takeUntil, last } from 'rxjs/operators'
import { RouterHistoryState, RouterHistoryStore } from '../store/router-history.store'

@Injectable({ providedIn: 'root' })
export class RouterHistoryQuery extends Query<RouterHistoryState> {
    previousUrl$: Observable<string> = this.select('previousUrl')

    constructor(protected readonly store: RouterHistoryStore) {
        super(store)
    }

    get(): Observable<RouterHistoryState> {
        const timerObserver = timer(0)
        return this.select().pipe(takeUntil(timerObserver), last())
    }

    findPreviousUrl(): Observable<string> {
        return this.select('previousUrl')
    }

    findCurrentUrl(): Observable<string> {
        return this.select('currentUrl')
    }

    findHistories(): Observable<string[]> {
        return this.select('histories')
    }
}
