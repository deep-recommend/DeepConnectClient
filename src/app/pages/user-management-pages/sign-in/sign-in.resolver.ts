import { Injectable } from '@angular/core';
import {
    ActivatedRouteSnapshot,
    Resolve,
    RouterStateSnapshot,
} from '@angular/router';
import { UiService } from 'src/app/states/ui/ui.service';

@Injectable()
export class SignInResolverService implements Resolve<void> {
    constructor(private readonly uiService: UiService) {}

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): void {
        this.uiService.hideRoutingTab();
        this.uiService.hideMobileHeader();
        this.uiService.hideLikeRoutingTab();
    }
}
