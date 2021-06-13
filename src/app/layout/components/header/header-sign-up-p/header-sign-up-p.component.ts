import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
    selector: 'app-header-sign-up-p',
    templateUrl: './header-sign-up-p.component.html',
    styleUrls: ['./header-sign-up-p.component.scss'],
})
export class HeaderSignUpPComponent implements OnInit {
    @Output() clickSignUp: EventEmitter<void> = new EventEmitter<void>();

    constructor() {}

    ngOnInit(): void {}

    onClickSignUp(): void {
        this.clickSignUp.emit();
    }
}
