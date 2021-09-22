import { Component } from '@angular/core'
import { Observable } from 'rxjs'
import { UiQuery } from 'src/app/states/ui/ui.query'

@Component({
    selector: 'app-title-header',
    templateUrl: './title-header.component.html',
    styleUrls: ['./title-header.component.scss'],
})
export class TitleHeaderComponent {
    pageName$: Observable<string> = this.uiQuery.pageName$

    constructor(private readonly uiQuery: UiQuery) {}
}
