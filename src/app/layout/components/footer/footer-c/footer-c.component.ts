import { Component, OnInit } from '@angular/core'
import { UiQuery } from 'src/app/states/ui/ui.query'

@Component({
    selector: 'app-footer-c',
    templateUrl: './footer-c.component.html',
    styleUrls: ['./footer-c.component.scss'],
})
export class FooterCComponent implements OnInit {
    footerLawItem$ = this.uiQuery.footerLawItems$
    footerSnsItem$ = this.uiQuery.footerSnsItems$

    constructor(private readonly uiQuery: UiQuery) {}

    ngOnInit(): void {}
}
