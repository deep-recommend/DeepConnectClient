import { Injectable } from '@angular/core';
import {
    ActivatedRouteSnapshot,
    Resolve,
    RouterStateSnapshot,
} from '@angular/router';
import { UiStore } from 'src/app/states/ui/ui.store';

@Injectable()
export class SearchResolverService implements Resolve<void> {
    constructor(private readonly uiStore: UiStore) {}

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): void {
        this.uiStore.displayPageName(route.data.title);
    }
}
