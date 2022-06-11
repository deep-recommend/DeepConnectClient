import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
    selector: 'app-privacy-policy',
    template: `<app-privacy-policy-c></app-privacy-policy-c>`,
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PrivacyPolicyComponent {}
