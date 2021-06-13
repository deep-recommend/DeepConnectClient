import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
    selector: 'app-header-sign-in-p',
    templateUrl: './header-sign-in-p.component.html',
    styleUrls: ['./header-sign-in-p.component.scss'],
})
export class HeaderSignInPComponent implements OnInit {
    @Output() clickSignIn: EventEmitter<void> = new EventEmitter<void>();

    constructor() {}

    ngOnInit(): void {}

    onClickSignIn(): void {
        this.clickSignIn.emit();
    }
}
