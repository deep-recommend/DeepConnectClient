import { Component, Input, OnInit } from '@angular/core'

@Component({
    selector: 'app-back-to-pre-page',
    templateUrl: './back-to-pre-page.component.html',
    styleUrls: ['./back-to-pre-page.component.scss'],
})
export class BackToPrePageComponent implements OnInit {
    @Input() pageName!: string | null | undefined

    constructor() {}

    ngOnInit(): void {}

    onClickBackToPrePage(): void {
        history.back()
    }
}
