import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core'
import { birthDayToAge } from 'src/app/general/functions/birthday-to-age'
import { LikeProps } from 'src/app/states/like'
import { UiService } from 'src/app/states/ui/ui.service'
import { UserProps } from 'src/app/states/user'
@Component({
    selector: 'app-matching-users-p',
    templateUrl: './matching-users-p.component.html',
    styleUrls: ['./matching-users-p.component.scss'],
})
export class MatchingUsersPComponent implements OnInit {
    @Input() currentUserId!: string | null
    @Input() users!: UserProps[] | null
    @Input() profile!: UserProps | null
    @Input() likes!: LikeProps[] | null
    @Output() clickUserToMessage: EventEmitter<string> = new EventEmitter<string>()
    @Output() outputUsers: EventEmitter<UserProps> = new EventEmitter<UserProps>()

    constructor(private readonly uiService: UiService) {}

    ngOnInit(): void {}

    birthDayToAge = birthDayToAge

    onClickUserToMessage(userId: string): void {
        this.clickUserToMessage.emit(userId)
    }

    isMatching(userId: string): boolean {
        return this.uiService.isMatching(String(this.currentUserId), userId)
    }
}
