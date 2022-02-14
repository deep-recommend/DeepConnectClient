import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActionButton, Counter } from '../../interfaces/action-bar.iterface';
import {
    trigger,
    state,
    style,
    transition,
    animate,
} from '@angular/animations';

@Component({
    selector: 'app-action-bar',
    templateUrl: './action-bar.component.html',
    styleUrls: ['./action-bar.component.scss'],
    animations: [
        trigger('flyInOut', [
            state('in', style({ transform: 'translateX(0)' })),
            transition('void => *', [
                style({ transform: 'translateX(-100%)' }),
                animate(300),
            ]),
            transition('* => void', [
                animate(300, style({ transform: 'translateX(100%)' })),
            ]),
        ]),
    ],
})
export class ActionBarComponent implements OnInit {
    @Input() counter!: Counter;
    @Input() barColor: 'ACCENT' | 'WARN' = 'ACCENT';
    @Input() btn!: ActionButton;
    @Output() action: EventEmitter<void> = new EventEmitter<void>();

    constructor() {}

    ngOnInit(): void {}

    onAction(): void {
        this.action.emit();
    }
}
