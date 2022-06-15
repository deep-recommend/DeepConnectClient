import {
    ChangeDetectionStrategy,
    Component,
    EventEmitter,
    Input,
    OnInit,
    Output,
} from '@angular/core';
import { UntypedFormGroup, UntypedFormBuilder } from '@angular/forms';
import { SignUpProps } from 'src/app/general/interfaces/sign-up.interface';
import { SignUpModel } from 'src/app/general/models/sign-up.model';

@Component({
    selector: 'app-sign-up-p',
    templateUrl: './sign-up-p.component.html',
    styleUrls: ['./sign-up-p.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SignUpPComponent implements OnInit {
    hide: boolean = true;
    hide2: boolean = true;
    customFile: any;
    onceSignUp: boolean = true;
    signUpFormInstance = new SignUpModel();
    signUpForm: UntypedFormGroup = this.fb.group(
        this.signUpFormInstance.formGroupValue
    );

    @Input() genders!: string[] | null;
    @Input() years!: number[] | null;
    @Input() months!: number[] | null;
    @Input() days!: number[] | null;
    @Input() birthPlaces!: string[] | null;

    @Output() signUp: EventEmitter<SignUpProps> =
        new EventEmitter<SignUpProps>();

    constructor(private readonly fb: UntypedFormBuilder) {}

    ngOnInit(): void {}

    onClickSignUp(): void {
        if (this.onceSignUp) {
            this.onceSignUp = false;
        }

        if (this.signUpForm.invalid) return;

        this.signUp.emit(this.signUpForm.value);
    }
}
