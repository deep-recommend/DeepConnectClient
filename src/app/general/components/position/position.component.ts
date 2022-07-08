import { Component, Input } from '@angular/core';
import { LangService } from '../../services/lang.service';

@Component({
    selector: 'app-position',
    templateUrl: './position.component.html',
    styleUrls: ['./position.component.scss'],
})
export class PositionComponent {
    @Input() position: string | null | undefined = 'none';

    get chipColor(): string {
        switch (this.position) {
            case 'none':
                return '';
            case 'visionary':
                return 'warn';
            case 'practitioner':
                return 'primary';
            default:
                return '';
        }
    }

    get puttingInOtherWords(): string {
        switch (this.position) {
            case 'none':
                return this.lang.isEn ? 'Unselected' : '未選択';
            case 'visionary':
                return this.lang.isEn ? 'Visionary' : 'ビジョナリー';
            case 'practitioner':
                return this.lang.isEn ? 'Practitioner' : 'ハッカー';
            default:
                return this.lang.isEn ? 'Unselected' : '未選択';
        }
    }

    constructor(private readonly lang: LangService) {}
}
