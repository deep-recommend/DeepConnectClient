import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { UserProps, UserService, UserQuery } from 'src/app/states/user';

@Component({
    selector: 'app-matching-users-c',
    templateUrl: './matching-users-c.component.html',
    styleUrls: ['./matching-users-c.component.scss'],
})
export class MatchingUsersCComponent implements OnInit {
    users$: Observable<UserProps[]> = this.userQuery.users$;

    constructor(
        private readonly userService: UserService,
        private readonly userQuery: UserQuery,
        private readonly router: Router
    ) {}

    ngOnInit(): void {
        this.userService.getUsersRequest().subscribe();
    }

    onReceivedClickUserToMessage(userId: number): void {
        console.log('userId', userId);
        this.router.navigate(['/message-room']);
    }
}
