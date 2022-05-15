import { Component, HostBinding } from '@angular/core';

@Component({
    selector: 'progress-spinner',
    template: `
        <div class="progress-spinner-container">
            <mat-spinner color="primary" [diameter]="48"></mat-spinner>
        </div>
    `,
    styles: [
        ':host {width: 100vw; height: 100vh; background-color: rgba(0,0,0,0.32); display:flex; justify-content:center; align-items: center;}',
    ],
})
export class ProgressSpinnerComponent {
    constructor() {}

    @HostBinding('@fadeInOut') fade: any;
}
