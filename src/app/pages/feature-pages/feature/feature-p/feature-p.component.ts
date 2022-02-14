import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-feature-p',
    templateUrl: './feature-p.component.html',
    styleUrls: ['./feature-p.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FeaturePComponent implements OnInit {
    constructor() {}

    ngOnInit(): void {}
}
