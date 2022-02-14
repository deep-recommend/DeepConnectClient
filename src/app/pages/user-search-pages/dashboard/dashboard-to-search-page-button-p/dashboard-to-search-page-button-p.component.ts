import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'app-dashboard-to-search-page-button-p',
    templateUrl: './dashboard-to-search-page-button-p.component.html',
    styleUrls: ['./dashboard-to-search-page-button-p.component.scss'],
})
export class DashboardToSearchPageButtonPComponent implements OnInit {
    @Output() clickSearchField: EventEmitter<void> = new EventEmitter<void>();

    constructor() {}

    ngOnInit() {}

    onClickSearchField(): void {
        this.clickSearchField.emit();
    }
}
