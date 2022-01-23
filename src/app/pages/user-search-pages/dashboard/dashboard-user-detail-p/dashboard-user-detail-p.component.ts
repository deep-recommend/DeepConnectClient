import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { UserProps } from 'src/app/states/user/user.model';

@Component({
  selector: 'app-dashboard-user-detail-p',
  templateUrl: './dashboard-user-detail-p.component.html',
  styleUrls: ['./dashboard-user-detail-p.component.scss']
})
export class DashboardUserDetailPComponent implements OnInit {
  @Input() user?: UserProps;
  @Output() clickUsersToDetail: EventEmitter<number> = new EventEmitter<number>();

  constructor() { }

  ngOnInit(): void {
  }

  onClickUsersToDetail(): void {
    this.clickUsersToDetail.emit(this.user?.id)
  }
}
