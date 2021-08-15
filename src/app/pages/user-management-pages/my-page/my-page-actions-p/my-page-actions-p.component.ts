import { Component, EventEmitter, OnInit, Output } from '@angular/core'

@Component({
    selector: 'app-my-page-actions-p',
    templateUrl: './my-page-actions-p.component.html',
    styleUrls: ['./my-page-actions-p.component.scss'],
})
export class MyPageActionsPComponent implements OnInit {
    @Output() clickToProfileSetting: EventEmitter<void> = new EventEmitter<void>()
    @Output() clickSignOut: EventEmitter<void> = new EventEmitter()

    constructor() {}

    ngOnInit(): void {}

    onClickToProfileSetting(): void {
        this.clickToProfileSetting.emit()
    }

    signOut(): void {
        this.clickSignOut.emit()
    }
}
