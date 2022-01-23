import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Observable } from 'rxjs';
import { UiService } from 'src/app/states/ui/ui.service';
import { UserProps } from 'src/app/states/user/user.model';

@Component({
  selector: 'app-matched-detail-p',
  templateUrl: './matched-detail-p.component.html',
  styleUrls: ['./matched-detail-p.component.scss']
})
export class MatchedDetailPComponent implements OnInit {
  @Input() user!: UserProps | null;
  @Input() profile!: UserProps | null;
  @Input() currentUserId!: number | null;
  @Output() clickUsersToMessage: EventEmitter<number> = new EventEmitter<number>();

  isMatching(): boolean {
    return  this.uiService.isMatching(Number(this.currentUserId), Number(this.user?.id))
  }

  constructor(
    private readonly uiService: UiService
  ) {}

  ngOnInit(): void {
  }


  onClickUserToMessage(): void {
    this.clickUsersToMessage.emit(this.user?.id)
  }
}
