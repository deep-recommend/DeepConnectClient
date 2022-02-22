import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Router, NavigationStart, NavigationEnd } from '@angular/router';
import { filter, scan } from 'rxjs/operators';
import { RouterHistory } from '../interfaces/router-history.interface';

import { RouterHistoryCommand } from 'src/app/libs/router-history/inftastructure/command/router-history.command';
import { RouterHistoryQuery } from 'src/app/libs/router-history/inftastructure/query/router-history.query';
import { RouterHistoryState } from 'src/app/libs/router-history/inftastructure/store/router-history.store';
import { RouterHistory as RouterHistoryDomain } from 'src/app/libs/router-history/domain/router-history';

@Injectable({
    providedIn: 'root',
})
export class RouterHistoryService {
    previousUrl$: Observable<string> =
        this.routerHistoryQueryService.findPreviousUrl();
    currentUrl$: Observable<string> =
        this.routerHistoryQueryService.findCurrentUrl();

    get state(): RouterHistoryState {
        return this.routerHistoryQueryService.getValue();
    }

    constructor(
        router: Router,
        private readonly routerHistoryCommandService: RouterHistoryCommand,
        private readonly routerHistoryQueryService: RouterHistoryQuery
    ) {
        router.events
            .pipe(
                filter(
                    (event: any) =>
                        event instanceof NavigationStart ||
                        event instanceof NavigationEnd
                ),
                scan<NavigationStart | NavigationEnd, RouterHistory>(
                    (acc: any, event: any) => {
                        if (event instanceof NavigationStart) {
                            // We need to track the trigger, id, and idToRestore from the NavigationStart events
                            return {
                                ...acc,
                                event,
                                trigger: event.navigationTrigger,
                                id: event?.id,
                                idToRestore:
                                    (event.restoredState &&
                                        event.restoredState.navigationId) ||
                                    undefined,
                            };
                        }

                        // NavigationEnd events
                        const history = [...acc.history];
                        let currentIndex = acc.currentIndex;

                        if (
                            router?.getCurrentNavigation()?.extras?.replaceUrl
                        ) {
                            history.pop();
                            currentIndex = history.length - 1;
                        }

                        // router events are imperative (router.navigate or routerLink)
                        if (acc.trigger === 'imperative') {
                            // remove all events in history that come after the current index
                            history.splice(currentIndex + 1);

                            // add the new event to the end of the history and set that as our current index
                            history.push({
                                id: acc.id,
                                url: event.urlAfterRedirects,
                            });
                            currentIndex = history.length - 1;
                        }

                        // browser events (back/forward) are popstate events
                        if (acc.trigger === 'popstate') {
                            // get the history item that references the idToRestore
                            const idx = history.findIndex(
                                (x) => x.id === acc.idToRestore
                            );

                            // if found, set the current index to that history item and update the id
                            if (idx > -1) {
                                currentIndex = idx;
                                history[idx].id = acc.id;
                            } else {
                                currentIndex = 0;
                            }
                        }

                        return {
                            ...acc,
                            event,
                            history,
                            currentIndex,
                        };
                    },
                    {
                        event: undefined,
                        history: [],
                        trigger: undefined,
                        id: 0,
                        idToRestore: 0,
                        currentIndex: 0,
                    }
                ),
                filter(
                    ({ event, trigger }) =>
                        event instanceof NavigationEnd && !!trigger
                )
            )
            .subscribe(async ({ history, currentIndex }) => {
                if (!history) {
                    return;
                }

                if (!currentIndex) {
                    return;
                }

                const previous = history[currentIndex - 1];
                const current = history[currentIndex];

                const currentState = await this.routerHistoryQueryService
                    .get()
                    .toPromise();
                const domain = RouterHistoryDomain.create({
                    ...currentState,
                    previousUrl: previous?.url ?? currentState?.previousUrl,
                    currentUrl: current?.url ?? currentState?.currentUrl,
                    histories: history.map((o) => o.url),
                });
                this.routerHistoryCommandService.update(domain);
            });
    }
}
