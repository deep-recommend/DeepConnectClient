import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core'
import { birthDayToAge } from 'src/app/general/functions/birthday-to-age'
import { LikeProps } from 'src/app/states/like'
import { UiService } from 'src/app/states/ui/ui.service'
import { UserProps } from 'src/app/states/user'

@Component({
    selector: 'app-like-from-others-p',
    templateUrl: './like-from-others-p.component.html',
    styleUrls: ['./like-from-others-p.component.scss'],
})
export class LikeFromOthersPComponent implements OnInit {
    @Input() currentUserId!: string | null
    @Input() users!: UserProps[] | null
    @Input() profile!: UserProps | null
    @Input() likes!: LikeProps[] | null
    @Output() clickUserToMessage: EventEmitter<string> = new EventEmitter<string>()

    constructor(private readonly uiService: UiService) {}

    ngOnInit(): void {}

    birthDayToAge = birthDayToAge

    onClickUserToMessage(userId: string): void {
        this.clickUserToMessage.emit(userId)
    }

    alreadyLikedByOthers(userId: string): boolean {
        return this.uiService.alreadyLikedByOthers(String(this.currentUserId), userId)
    }
}
