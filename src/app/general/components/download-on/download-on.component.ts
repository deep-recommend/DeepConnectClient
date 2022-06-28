import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-download-on',
    templateUrl: './download-on.component.html',
    styleUrls: ['./download-on.component.scss'],
})
export class DownloadOnComponent {
    constructor(private readonly router: Router) {}

    toGooglePlay(): void {
        window.open(
            'https://play.google.com/store/apps/details?id=com.deepconnect.deeprecommend',
            '_blank',
            'noreferrer'
        );
    }

    toAppStore(): void {
        window.open(
            'https://apps.apple.com/jp/app/id1626939522',
            '_blank',
            'noreferrer'
        );
    }
}
