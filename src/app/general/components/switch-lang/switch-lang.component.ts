import { Component } from '@angular/core';
import { LangService } from '../../services/lang.service';

@Component({
    selector: 'app-switch-lang',
    templateUrl: './switch-lang.component.html',
    styleUrls: ['./switch-lang.component.scss'],
})
export class SwitchLangComponent {
    constructor(private readonly lang: LangService) {}

    toEnglish(): void {
        this.lang.toEn();
    }

    toJapanese(): void {
        this.lang.toJa();
    }
}
