import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-footer-logo-p',
    templateUrl: './footer-logo-p.component.html',
    styleUrls: ['./footer-logo-p.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FooterLogoPComponent implements OnInit {
    constructor() {}

    ngOnInit(): void {}
}
