import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Observable } from 'rxjs';
import { UiService } from 'src/app/states/ui/ui.service';
import { UserProps } from 'src/app/states/user/user.model';

@Component({
  selector: 'app-matching-users-detail-p',
  templateUrl: './matching-users-detail-p.component.html',
  styleUrls: ['./matching-users-detail-p.component.scss']
})
export class MatchingUsersDetailPComponent implements OnInit {
  @Input() currentUserId!: number | null
  @Input() profile!: UserProps | null;
  @Input() user!: UserProps | null;
  @Output() clickUsersToMessage: EventEmitter<number> = new EventEmitter<number>();

  isMatching(): boolean {
    return this.uiService.isMatching(Number(this.currentUserId), Number(this.user?.id))
  }

  constructor(
    private readonly uiService: UiService,
  ) { }

  ngOnInit(): void {
  }

  onClickUserToMessage(): void {
    this.clickUsersToMessage.emit(this.user?.id)
  }
}
