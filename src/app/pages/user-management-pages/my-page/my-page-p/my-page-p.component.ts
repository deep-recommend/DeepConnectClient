import {
    ChangeDetectionStrategy,
    Component,
    Input,
    OnChanges,
    OnInit,
    ViewChild,
} from '@angular/core';
import { toBlob } from 'src/app/general/functions/to-blob';
import { UserProps } from 'src/app/states/user/user.model';

@Component({
    selector: 'app-my-page-p',
    templateUrl: './my-page-p.component.html',
    styleUrls: ['./my-page-p.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MyPagePComponent implements OnInit, OnChanges {
    icon?: any;

    @Input() profile!: UserProps | null;

    constructor() {}

    ngOnInit(): void {
        this.getIcon();
    }

    ngOnChanges(): void {
        this.getIcon();
    }

    getIcon(): void {
        toBlob(String(this.profile?.profilePicture)).subscribe();
    }
}
