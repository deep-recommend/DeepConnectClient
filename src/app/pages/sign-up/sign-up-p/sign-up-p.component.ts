import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { checkPasswordConsistency } from 'src/app/general/functions/check-password-consistency';
import { SignUpProps } from 'src/app/general/interfaces/sign-up.interface';
import { SignUpModel } from 'src/app/general/models/sign-up.model';

@Component({
    selector: 'app-sign-up-p',
    templateUrl: './sign-up-p.component.html',
    styleUrls: ['./sign-up-p.component.scss'],
})
export class SignUpPComponent implements OnInit {
    hide: boolean = true;
    hide2: boolean = true;
    signUpFormInstance = new SignUpModel();
    signUpForm: FormGroup = this.fb.group(this.signUpFormInstance.formGroupValue);

    @Output() signUp: EventEmitter<SignUpProps> = new EventEmitter<SignUpProps>();

    constructor(private readonly fb: FormBuilder) {}

    ngOnInit(): void {}

    onClickSignUp(): void {
        this.signUp.emit(this.signUpForm.value);
    }
}
