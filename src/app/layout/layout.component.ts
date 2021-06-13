import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-layout',
    templateUrl: './layout.component.html',
    styleUrls: ['./layout.component.scss'],
})
export class LayoutComponent implements OnInit {
    constructor() {}

    ngOnInit(): void {}

    isVisibleLayout(): boolean {
        let bool: boolean;
        const currentPath = location.pathname;
        if (currentPath === '/sign-in') {
            bool = false;
        } else if (currentPath === '/sign-up') {
            bool = false;
        } else {
            bool = true;
        }
        return bool;
    }
}
