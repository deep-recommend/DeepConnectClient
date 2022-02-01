import { ChangeDetectionStrategy, Component, OnInit, Input } from '@angular/core'
import { UserProps } from 'src/app/states/user/user.model'

@Component({
    selector: 'app-no-matching-users-p',
    templateUrl: './no-matching-users-p.component.html',
    styleUrls: ['./no-matching-users-p.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NoMatchingUsersPComponent implements OnInit {
    @Input() users!: UserProps[] | null
    
    constructor() {}

    ngOnInit(): void {}
}
