import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core'

@Component({
    selector: 'app-no-matching-users-p',
    templateUrl: './no-matching-users-p.component.html',
    styleUrls: ['./no-matching-users-p.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NoMatchingUsersPComponent implements OnInit {
    constructor() {}

    ngOnInit(): void {}
}
