import { Injectable } from '@angular/core';
import { MatSnackBar, MatSnackBarConfig } from '@angular/material/snack-bar';

@Injectable({
    providedIn: 'root',
})
export class SnackBarService {
    constructor(public snackBar: MatSnackBar) {}

    open(message: string, action?: string, config?: MatSnackBarConfig): void {
        this.snackBar.open(message, action ?? '✕', {
            ...config,
            duration: 3000,
            panelClass: config?.panelClass ?? ['custom-snackbar'],
        });
    }
}
