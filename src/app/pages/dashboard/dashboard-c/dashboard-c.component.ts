import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { UserProps, UserQuery, UserService } from 'src/app/states/user';

@Component({
    selector: 'app-dashboard-c',
    templateUrl: './dashboard-c.component.html',
    styleUrls: ['./dashboard-c.component.scss'],
})
export class DashboardCComponent implements OnInit {
    users$: Observable<UserProps[]> = this.userQuery.users$;
    constructor(private readonly userService: UserService, private readonly userQuery: UserQuery) {}

    ngOnInit(): void {
        this.userService.getUsersRequest().subscribe();
    }
}
