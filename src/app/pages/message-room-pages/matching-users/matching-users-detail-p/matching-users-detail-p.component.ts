import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { RoomProps } from 'src/app/states/room/room.model';
import { UserProps } from 'src/app/states/user/user.model';
import { UserService } from 'src/app/states/user/user.service';

@Component({
  selector: 'app-matching-users-detail-p',
  templateUrl: './matching-users-detail-p.component.html',
  styleUrls: ['./matching-users-detail-p.component.scss']
})
export class MatchingUsersDetailPComponent implements OnInit {
  user?: UserProps;

  @Input() room!: RoomProps | null;
  @Output() clickUsersToMessage: EventEmitter<number> = new EventEmitter<number>();

  constructor(
    private readonly userService: UserService
  ) { }

  ngOnInit(): void {
    // this.userService.getOnlyUserRequest(Number(this.room?.userId)).subscribe(user => {
    //   this.user = user
    // })
  }

  onClickUserToMessage(): void {
    this.clickUsersToMessage.emit(this.room?.userId)
  }
}
