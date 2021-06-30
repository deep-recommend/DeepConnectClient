import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthenticationService } from 'src/app/general/services/authentication.service';
import { companionIdKey } from 'src/app/general/utilities/local-strage';
import { UserProps, UserService, UserQuery, ProfileProps } from 'src/app/states/user';

@Component({
    selector: 'app-matching-users-c',
    templateUrl: './matching-users-c.component.html',
    styleUrls: ['./matching-users-c.component.scss'],
})
export class MatchingUsersCComponent implements OnInit {
    users$: Observable<UserProps[]> = this.userQuery.users$;
    profile$: Observable<ProfileProps> = this.userQuery.profile$;

    constructor(
        private readonly userService: UserService,
        private readonly userQuery: UserQuery,
        private readonly router: Router,
        private readonly authenticationService: AuthenticationService
    ) {}

    ngOnInit(): void {
        this.userService.getUsersRequest().subscribe();
        this.authenticationService.getProfile().subscribe();
    }

    onReceivedClickUserToMessage(userId: string): void {
        this.userService.getCompanionRequest(userId).subscribe(() => {
            localStorage.setItem(companionIdKey, userId);
            this.router.navigate(['/message-room']);
        });
    }
}
