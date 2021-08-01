import { Component, EventEmitter, OnInit, Output } from '@angular/core'

@Component({
    selector: 'app-back-to-pre-page',
    templateUrl: './back-to-pre-page.component.html',
    styleUrls: ['./back-to-pre-page.component.scss'],
})
export class BackToPrePageComponent implements OnInit {
    constructor() {}

    ngOnInit(): void {}

    onClickBackToPrePage(): void {
        history.back()
    }
}
