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
    private _rooms!: RoomProps[];

    @Input() set rooms(rooms: RoomProps[] | null) {
        this._rooms = rooms?.filter((room: RoomProps) => {
            const duplicated = rooms.find(
                (_room) =>
                    room.userA === _room.userB && room.userB === _room.userA
            );
            console.log({ duplicated });
            if (!duplicated?.id) return true;

            console.log('if', room.id > duplicated?.id);
            if (duplicated?.id < room.id) return false;

            return true;
        }) as RoomProps[];
    }

    get rooms(): RoomProps[] | null {
        return this._rooms;
    }

    constructor() {}

    ngOnInit(): void {}
}
