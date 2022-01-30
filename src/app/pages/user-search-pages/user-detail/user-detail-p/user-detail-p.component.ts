import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnChanges, OnInit, Output } from '@angular/core'
import { Observable } from 'rxjs'
import { UiService } from 'src/app/states/ui/ui.service'
import { UserProps } from 'src/app/states/user/user.model'

@Component({
    selector: 'app-user-detail-p',
    templateUrl: './user-detail-p.component.html',
    styleUrls: ['./user-detail-p.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UserDetailPComponent implements OnInit, OnChanges {
    @Input() user!: UserProps | null | undefined
    @Input() currentUserId!: number | null | undefined
    @Output() clickUserToMessage: EventEmitter<number> = new EventEmitter<number>()

    isMatching$: Observable<boolean> = this.uiService.isMatching(Number(this.currentUserId), Number(this.user?.id))

    constructor(private readonly uiService: UiService) {}

    ngOnInit(): void {}

    ngOnChanges(): void {}

    onClickUserToMessage(userId: number): void {
        this.clickUserToMessage.emit(userId)
    }
}
