import {
    Component,
    Input,
    OnInit,
    Output,
    EventEmitter,
    ChangeDetectionStrategy,
} from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { SignInProps } from 'src/app/general/interfaces/sign-in.interface';
import { SignInModel } from 'src/app/general/models/sign-in.model';

@Component({
    selector: 'app-sign-in-p',
    templateUrl: './sign-in-p.component.html',
    styleUrls: ['./sign-in-p.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SignInPComponent implements OnInit {
    hide: boolean = true;
    signInFormInstance = new SignInModel();
    signInForm: FormGroup = this.fb.group(
        this.signInFormInstance.formGroupValue
    );

    @Input() error!: string | null;
    @Output() signIn: EventEmitter<SignInProps> =
        new EventEmitter<SignInProps>();

    constructor(private readonly fb: FormBuilder) {}

    ngOnInit(): void {}

    onClickSignIn(): void {
        this.signIn.emit(this.signInForm.value);
    }
}
