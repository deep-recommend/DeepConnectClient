import { Injectable } from '@angular/core';
import { RouterHistory } from '../../domain/router-history';
import { RouterHistoryStore } from '../store/router-history.store';

@Injectable({ providedIn: 'root' })
export class RouterHistoryCommand {
    constructor(private readonly store: RouterHistoryStore) {}

    update(routerHistory: RouterHistory): void {
        this.store.update({
            previousUrl: routerHistory.previousUrl,
            currentUrl: routerHistory.currentUrl,
            histories: routerHistory.histories,
        });
    }
}
