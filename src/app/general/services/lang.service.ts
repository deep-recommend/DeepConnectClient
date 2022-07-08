import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { langKey } from '../utilities/local-strage';

@Injectable({
    providedIn: 'root',
})
export class LangService {
    constructor(private readonly translate: TranslateService) {}

    get isEn(): boolean {
        return this.translate.currentLang === 'en';
    }

    init(): void {
        const latestLang = localStorage.getItem(langKey);

        if (latestLang) {
            this.translate.setDefaultLang(latestLang);
            this.translate.use(latestLang);
        } else {
            this.translate.setDefaultLang('en');
            this.translate.use('en');
        }
    }

    toEn(): void {
        localStorage.setItem(langKey, 'en');
        this.translate.use('en');
    }

    toJa(): void {
        localStorage.setItem(langKey, 'ja');
        this.translate.use('ja');
    }
}
