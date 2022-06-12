import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
    selector: 'app-terms',
    template: `<app-terms-c></app-terms-c>`,
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TermsComponent {}
