import { Component, Input, OnInit, Output, EventEmitter, ViewChildren, QueryList, OnDestroy } from '@angular/core'
import { MatListItem } from '@angular/material/list'
import { Observable, Subject } from 'rxjs'
import { takeUntil } from 'rxjs/operators'
import { SideNavMenu } from 'src/app/general/domains/layout/sidenav-menu.domain'

@Component({
    selector: 'app-sidenav-p',
    templateUrl: './sidenav-p.component.html',
    styleUrls: ['./sidenav-p.component.scss'],
})
export class SidenavPComponent implements OnInit, OnDestroy {
    @Input() sideNavMenus!: SideNavMenu[] | null
    @Input() lockSideNav$!: Observable<void> | null
    @Output() clickSideNavMenu: EventEmitter<{ index: number; item: SideNavMenu }> = new EventEmitter<{
        index: number
        item: SideNavMenu
    }>()

    @ViewChildren(MatListItem) matListItems!: QueryList<MatListItem>

    private readonly _unsubscribe$ = new Subject<void>()

    constructor() {}

    ngOnInit(): void {
        this.lockSideNav$?.pipe(takeUntil(this._unsubscribe$)).subscribe(() => {
            this.matListItems.first._getHostElement().focus()
        })
    }

    ngOnDestroy(): void {
        this._unsubscribe$.next()
    }
}
