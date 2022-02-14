import {
    ChangeDetectionStrategy,
    Component,
    OnInit,
    Input,
} from '@angular/core';
import { RoomProps } from 'src/app/states/room/room.model';

@Component({
    selector: 'app-no-matching-users-p',
    templateUrl: './no-matching-users-p.component.html',
    styleUrls: ['./no-matching-users-p.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NoMatchingUsersPComponent implements OnInit {
    @Input() rooms!: RoomProps[] | null;

    constructor() {}

    ngOnInit(): void {}
}
