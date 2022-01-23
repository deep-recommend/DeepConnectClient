import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Observable } from 'rxjs';
import { UiService } from 'src/app/states/ui/ui.service';
import { UserProps } from 'src/app/states/user/user.model';

@Component({
  selector: 'app-like-from-me-detail-p',
  templateUrl: './like-from-me-detail-p.component.html',
  styleUrls: ['./like-from-me-detail-p.component.scss']
})
export class LikeFromMeDetailPComponent implements OnInit {
  @Input() user!: UserProps | null;
  @Input() profile!: UserProps | null;
  @Input() currentUserId!: number | null;
  @Output() clickUsersToMessage: EventEmitter<number> = new EventEmitter<number>();

  alreadyLiked: boolean = this.uiService.alreadyLikedByMyself(Number(this.currentUserId), Number(this.user?.id))

  constructor(
    private readonly uiService: UiService
  ) { }

  ngOnInit(): void {
  }

  onClickUserToMessage(): void {
    this.clickUsersToMessage.emit(this.user?.id)
  }
}
