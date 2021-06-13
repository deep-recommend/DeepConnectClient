import { Validators } from '@angular/forms';
import { SignUpFormProps, SignUpProps } from '../interfaces/sign-up.interface';

export class SignUpModel implements SignUpProps {
    name: string = '';
    email: string = '';
    password: string = '';
    passwordConfirmation: string = '';

    constructor(value?: SignUpProps) {
        if (value) {
            this.name = value.name;
            this.email = value.email;
            this.password = value.password;
            this.passwordConfirmation = value.passwordConfirmation;
        }
    }

    get value(): SignUpProps {
        return {
            name: this.name,
            email: this.email,
            password: this.password,
            passwordConfirmation: this.passwordConfirmation,
        };
    }

    get formGroupValue(): SignUpFormProps {
        return {
            name: [this.name, [Validators.required]],
            email: [this.email, [Validators.required, Validators.email]],
            password: [this.password, [Validators.required]],
            passwordConfirmation: [this.passwordConfirmation, [Validators.required]],
        };
    }

    static isSignInForm(item: SignUpFormProps): SignUpFormProps | undefined {
        return item.email && item.password ? item : undefined;
    }
}
