import { Location } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { UiQuery } from 'src/app/states/ui/ui.query';
import { Menu } from '../../interfaces/menu.interface';

@Component({
    selector: 'app-back-to-pre-page',
    templateUrl: './back-to-pre-page.component.html',
    styleUrls: ['./back-to-pre-page.component.scss'],
})
export class BackToPrePageComponent implements OnInit {
    pageName$: Observable<string> = this.uiQuery.pageName$;

    @Input() needsMenu: boolean = false;
    @Input() menus: Menu[] = [];

    constructor(
        private readonly uiQuery: UiQuery,
        private readonly location: Location,
        private readonly router: Router
    ) {}

    ngOnInit(): void {}

    onClickBackToPrePage(): void {
        if (location.pathname.slice(1, 12)) {
            this.router.navigate(['/']);
            return;
        }

        this.location.back();
    }
}
