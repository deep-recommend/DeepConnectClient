import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { UiQuery } from 'src/app/states/ui/ui.query';
import { UiStore } from 'src/app/states/ui/ui.store';

@Component({
    selector: 'app-back-to-pre-page',
    templateUrl: './back-to-pre-page.component.html',
    styleUrls: ['./back-to-pre-page.component.scss'],
})
export class BackToPrePageComponent implements OnInit {
    pageName$: Observable<string> = this.uiQuery.pageName$;

    constructor(
        private readonly uiStore: UiStore,
        private readonly uiQuery: UiQuery,
        private readonly location: Location
    ) {}

    ngOnInit(): void {}

    onClickBackToPrePage(): void {
        if (this.uiQuery.pageNameGetter === 'メッセージ中') {
            this.uiStore.displayRoutingTab();
        }
        this.location.back();
    }
}
