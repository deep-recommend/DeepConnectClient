import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FooterItem } from 'src/app/general/domains/layout/footer.domain';

@Component({
    selector: 'app-footer-sns-p',
    templateUrl: './footer-sns-p.component.html',
    styleUrls: ['./footer-sns-p.component.scss'],
})
export class FooterSnsPComponent implements OnInit {
    @Input() footerSnsItem!: FooterItem[] | null;

    constructor() {}

    ngOnInit(): void {}
}
