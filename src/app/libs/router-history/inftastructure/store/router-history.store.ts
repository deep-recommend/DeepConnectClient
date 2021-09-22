import { Injectable } from '@angular/core'
import { StoreConfig, Store } from '@datorama/akita'
import { IRouterHistory } from '../../domain/i-router-history'
import { RouterHistory } from '../../domain/router-history'

export interface RouterHistoryState extends IRouterHistory {}

export const createInitialState = (): RouterHistoryState => {
    const domain = RouterHistory.create({
        previousUrl: String(null),
        currentUrl: String(null),
        histories: [],
    })

    return {
        previousUrl: domain.previousUrl,
        currentUrl: domain.currentUrl,
        histories: domain.histories,
    }
}

@Injectable({ providedIn: 'root' })
@StoreConfig({ name: 'routerHistory' })
export class RouterHistoryStore extends Store<RouterHistoryState> {
    constructor() {
        super(createInitialState())
    }
}
