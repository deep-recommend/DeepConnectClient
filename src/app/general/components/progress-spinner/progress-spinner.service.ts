import { OverlayRef, Overlay } from '@angular/cdk/overlay';
import { ComponentPortal } from '@angular/cdk/portal';
import { Injectable } from '@angular/core';
import { Subject, Subscription, timer } from 'rxjs';
import { debounceTime } from 'rxjs/operators';
import { ProgressSpinnerComponent } from './progress-spinner.component';

@Injectable({ providedIn: 'root' })
export class ProgressSpinnerService {
    overlayRef: OverlayRef | null = null;

    spinEvent: Subject<boolean> = new Subject<boolean>();
    spinEvent$!: Subscription;
    timer$!: Subscription;

    constructor(private readonly overlay: Overlay) {
        this.spinEvent$ = this.spinEvent
            .pipe(debounceTime(0))
            .subscribe((bool) => {
                if (bool) {
                    if (!this.overlayRef) {
                        this.overlayRef = this.overlay.create({
                            hasBackdrop: true,
                            backdropClass: 'progress-spinner-backdrop',
                            positionStrategy: this.overlay
                                .position()
                                .global()
                                .centerHorizontally()
                                .centerVertically(),
                        });
                        this.overlayRef.attach(
                            new ComponentPortal(ProgressSpinnerComponent)
                        );
                        this._timeStart();
                    } else {
                        this._timeStart();
                        this._timeStart();
                    }
                } else {
                    if (this.overlayRef) {
                        this.overlayRef.detach();
                        this.overlayRef = null;
                    }
                    this._timerEnd();
                }
            });
    }

    open(): void {
        this.spinEvent.next(true);
    }

    close(): void {
        this.spinEvent.next(false);
    }

    private _timeStart(): void {
        this.timer$ = timer(20000).subscribe(() => {
            this.close();
        });
    }

    private _timerEnd(): void {
        if (this.timer$) {
            this.timer$.unsubscribe();
        }
    }
}
