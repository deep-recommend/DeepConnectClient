import { Component, Input, OnInit } from '@angular/core'
import { UiStore } from 'src/app/states/ui'

@Component({
    selector: 'app-back-to-pre-page',
    templateUrl: './back-to-pre-page.component.html',
    styleUrls: ['./back-to-pre-page.component.scss'],
})
export class BackToPrePageComponent implements OnInit {
    @Input() pageName!: string | null | undefined

    constructor(private uiStore: UiStore) {}

    ngOnInit(): void {}

    onClickBackToPrePage(): void {
        if (this.pageName === 'メッセージ中') {
            this.uiStore.displayRoutingTab()
        }
        history.back()
    }
}
