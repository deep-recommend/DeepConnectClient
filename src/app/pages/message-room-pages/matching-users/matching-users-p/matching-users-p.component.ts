import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { birthDayToAge } from 'src/app/general/functions/birthday-to-age';
import { UserProps } from 'src/app/states/user';

@Component({
    selector: 'app-matching-users-p',
    templateUrl: './matching-users-p.component.html',
    styleUrls: ['./matching-users-p.component.scss'],
})
export class MatchingUsersPComponent implements OnInit {
    @Input() users!: UserProps[] | null;
    @Output() clickUserToMessage: EventEmitter<string> = new EventEmitter<string>();

    constructor() {}

    ngOnInit(): void {}

    birthDayToAge = birthDayToAge;

    onClickUserToMessage(userId: string): void {
        this.clickUserToMessage.emit(userId);
    }
}
