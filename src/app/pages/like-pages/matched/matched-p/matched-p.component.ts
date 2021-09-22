import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core'
import { birthDayToAge } from 'src/app/general/functions/birthday-to-age'
import { LikeProps } from 'src/app/states/like/like.model'
import { UiService } from 'src/app/states/ui/ui.service'
import { UserProps } from 'src/app/states/user/user.model'

@Component({
    selector: 'app-matched-p',
    templateUrl: './matched-p.component.html',
    styleUrls: ['./matched-p.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MatchedPComponent implements OnInit {
    @Input() currentUserId!: number | null
    @Input() users!: UserProps[] | null
    @Input() profile!: UserProps | null
    @Input() likes!: LikeProps[] | null
    @Output() clickUserToMessage: EventEmitter<number> = new EventEmitter<number>()

    constructor(private readonly uiService: UiService) {}

    ngOnInit(): void {}

    birthDayToAge = birthDayToAge

    onClickUserToMessage(userId: number): void {
        this.clickUserToMessage.emit(userId)
    }

    isMatching(userId: number): boolean {
        return this.uiService.isMatching(Number(this.currentUserId), userId)
    }
}
