import { Component, Input } from '@angular/core';

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
                return '未選択';
            case 'visionary':
                return 'ビジョナリー';
            case 'practitioner':
                return 'ハッカー';
            default:
                return '未選択';
        }
    }
}
