import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { HeaderAccountMenu } from 'src/app/general/domains/layout/header-user-menu.domain';
import { MediaObserver } from '@angular/flex-layout';
import { mergeMap } from 'rxjs/operators';
import { of } from 'rxjs';
import { UserProps } from 'src/app/states/user';

@Component({
    selector: 'app-header-user-menu-p',
    templateUrl: './header-user-menu-p.component.html',
    styleUrls: ['./header-user-menu-p.component.scss'],
})
export class HeaderUserMenuPComponent implements OnInit {
    @Input() profile!: UserProps | null;
    @Input() headerAccountMenus!: HeaderAccountMenu[] | null;
    @Output() clickAccountMenu: EventEmitter<{ index: number; item: HeaderAccountMenu }> = new EventEmitter<{
        index: number;
        item: HeaderAccountMenu;
    }>();

    enableHideMenuItem$ = this.mediaObserver
        .asObservable()
        .pipe(mergeMap(() => of(this.mediaObserver.isActive('gt-sm'))));

    constructor(public readonly mediaObserver: MediaObserver) {}

    ngOnInit(): void {}

    onClickAccountMenu(index: number, item: HeaderAccountMenu): void {
        this.clickAccountMenu.emit({ index, item });
    }
}
