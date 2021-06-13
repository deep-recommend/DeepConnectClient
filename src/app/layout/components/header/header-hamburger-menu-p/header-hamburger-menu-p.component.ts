import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
    selector: 'app-header-hamburger-menu-p',
    templateUrl: './header-hamburger-menu-p.component.html',
    styleUrls: ['./header-hamburger-menu-p.component.scss'],
})
export class HeaderHamburgerMenuPComponent implements OnInit {
    @Output() mouseOverMenuButton: EventEmitter<void> = new EventEmitter<void>();
    @Output() mouseLeaveMenuButton: EventEmitter<void> = new EventEmitter<void>();
    @Output() clickMenuButton: EventEmitter<void> = new EventEmitter<void>();

    constructor() {}

    ngOnInit(): void {}

    onClickedMenuButton(): void {
        this.clickMenuButton.emit();
    }
}
