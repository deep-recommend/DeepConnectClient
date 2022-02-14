import { Injectable } from '@angular/core';
import {
    ActivatedRouteSnapshot,
    Resolve,
    RouterStateSnapshot,
} from '@angular/router';
import { merge, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { RoomService } from 'src/app/states/room/room.service';
import { UiStore } from 'src/app/states/ui/ui.store';

@Injectable()
export class MatchingUsersResolverService implements Resolve<Observable<void>> {
    constructor(
        private readonly uiStore: UiStore,
        private readonly roomService: RoomService
    ) {}

    resolve(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
    ): Observable<void> {
        this.uiStore.displayRoutingTab();
        this.uiStore.displayPageName(route.data.title);

        return merge(this.roomService.getRoomsRequest()).pipe(
            map((observer) => void observer)
        );
    }
}
