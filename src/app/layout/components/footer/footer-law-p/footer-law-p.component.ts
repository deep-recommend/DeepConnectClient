import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core'
import { FooterItem } from 'src/app/general/domains/layout/footer.domain'

@Component({
    selector: 'app-footer-law-p',
    templateUrl: './footer-law-p.component.html',
    styleUrls: ['./footer-law-p.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FooterLawPComponent implements OnInit {
    @Input() footerLawItem!: FooterItem[] | null

    constructor() {}

    ngOnInit(): void {}
}
