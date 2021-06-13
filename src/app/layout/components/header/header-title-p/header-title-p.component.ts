import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'app-header-title-p',
    templateUrl: './header-title-p.component.html',
    styleUrls: ['./header-title-p.component.scss'],
})
export class HeaderTitlePComponent implements OnInit {
    @Output() clickHeaderTitle: EventEmitter<void> = new EventEmitter<void>();

    constructor() {}

    ngOnInit(): void {}

    onClickHeaderTitle(): void {
        this.clickHeaderTitle.emit();
    }
}
