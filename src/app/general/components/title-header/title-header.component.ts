import { Component, Input, OnInit } from '@angular/core'

@Component({
    selector: 'app-title-header',
    templateUrl: './title-header.component.html',
    styleUrls: ['./title-header.component.scss'],
})
export class TitleHeaderComponent implements OnInit {
    @Input() pageName!: string | null | undefined

    constructor() {}

    ngOnInit(): void {}
}
