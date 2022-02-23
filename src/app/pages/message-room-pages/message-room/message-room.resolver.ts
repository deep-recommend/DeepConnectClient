import { Injectable } from '@angular/core';
import {
    ActivatedRouteSnapshot,
    Resolve,
    RouterStateSnapshot,
} from '@angular/router';
import { forkJoin, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { UiStore } from 'src/app/states/ui/ui.store';
import { MessageService } from '../../../states/message/message.service';

@Injectable()
export class MessageRoomResolverService implements Resolve<Observable<void>> {
    constructor(
        private readonly uiStore: UiStore,
        private readonly messageService: MessageService
    ) {}

    resolve(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
    ): Observable<void> {
        this.uiStore.hideRoutingTab();
        this.uiStore.displayPageName(route.data.title);

        return forkJoin(this.messageService.getMessagesRequest()).pipe(
            map((observer) => void observer)
        );
    }
}
