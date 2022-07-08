import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
    selector: 'app-wave',
    templateUrl: './wave.component.html',
    styleUrls: ['./wave.component.scss'],
})
export class WaveComponent {
    constructor(public translate: TranslateService) {}
}
