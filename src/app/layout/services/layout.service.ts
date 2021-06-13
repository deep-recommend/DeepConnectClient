import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class LayoutService {
    private _lockSideNav$ = new Subject<void>();

    constructor() {}

    emitLockSideNav(): void {
        this._lockSideNav$.next();
    }

    receiveLockSideNav(): Observable<void> {
        return this._lockSideNav$.asObservable();
    }
}
