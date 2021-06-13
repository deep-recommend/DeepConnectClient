import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { mergeMap } from 'rxjs/operators';
import { SignUpProps } from 'src/app/general/interfaces/sign-up.interface';
import { UserService } from 'src/app/states/user';

@Component({
    selector: 'app-sign-up-c',
    templateUrl: './sign-up-c.component.html',
    styleUrls: ['./sign-up-c.component.scss'],
})
export class SignUpCComponent implements OnInit {
    constructor(private readonly userService: UserService, private readonly router: Router) {}

    ngOnInit(): void {}

    onReceivedClickSignUp(signUp: SignUpProps): void {
        this.userService
            .postUserRequest(signUp)
            .pipe(mergeMap(() => this.router.navigate(['/dashboard'])))
            .subscribe(() => {});
    }
}
