import { Component, OnInit } from '@angular/core';
import { UiQuery } from 'src/app/states/ui';
import { debounceTime, delay, switchMap } from 'rxjs/operators';
import { combineLatest, of, pipe } from 'rxjs';
import { LayoutService } from 'src/app/layout/services/layout.service';
import { SideNavMenu } from 'src/app/general/domains/layout/sidenav-menu.domain';

@Component({
    selector: 'app-sidenav-c',
    templateUrl: './sidenav-c.component.html',
    styleUrls: ['./sidenav-c.component.scss'],
})
export class SidenavCComponent implements OnInit {
    sideNavMenus$ = this.uiQuery.sideNavMenus$;
    isSideNavFullMenuVisible$ = this.uiQuery.isSideNavFullMenuVisible$.pipe(debounceTime(10));
    existsSideNavElement$ = combineLatest([this.isSideNavFullMenuVisible$]).pipe(
        switchMap(([full]) => {
            if (full) {
                return of(true);
            } else {
                return of(false).pipe(delay(300));
            }
        })
    );

    lockSideNav$ = this.layoutService.receiveLockSideNav();

    constructor(private readonly uiQuery: UiQuery, private readonly layoutService: LayoutService) {}

    ngOnInit(): void {}

    onReceivedClickSideNav(index: number, item: SideNavMenu): void {
        console.log('Click side nav', index, item);
    }
}
