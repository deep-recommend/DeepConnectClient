import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'app-header-logo-p',
    templateUrl: './header-logo-p.component.html',
    styleUrls: ['./header-logo-p.component.scss'],
})
export class HeaderLogoPComponent implements OnInit {
    @Output() clickHeaderLogo: EventEmitter<void> = new EventEmitter<void>();

    constructor() {}

    ngOnInit(): void {}

    onClickHeaderLogo(): void {
        this.clickHeaderLogo.emit();
    }
}
