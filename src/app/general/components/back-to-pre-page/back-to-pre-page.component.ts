import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { UiQuery } from 'src/app/states/ui/ui.query';

@Component({
    selector: 'app-back-to-pre-page',
    templateUrl: './back-to-pre-page.component.html',
    styleUrls: ['./back-to-pre-page.component.scss'],
})
export class BackToPrePageComponent implements OnInit {
    pageName$: Observable<string> = this.uiQuery.pageName$;

    constructor(
        private readonly uiQuery: UiQuery,
        private readonly location: Location
    ) {}

    ngOnInit(): void {}

    onClickBackToPrePage(): void {
        this.location.back();
    }
}
