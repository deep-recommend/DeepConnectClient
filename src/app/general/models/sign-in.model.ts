import { Validators } from '@angular/forms';
import { SignInFormProps, SignInProps } from '../interfaces/sign-in.interface';

export class SignInModel implements SignInProps {
    email!: string;
    password!: string;

    constructor(value?: SignInProps) {
        if (value) {
            this.email = value.email;
            this.password = value.password;
        }
    }

    get value(): SignInProps {
        return {
            email: this.email,
            password: this.password,
        };
    }

    get formGroupValue(): SignInFormProps {
        return {
            email: [this.email, [Validators.required, Validators.email]],
            password: [this.password, [Validators.required]],
        };
    }

    static isSignInForm(item: SignInFormProps): SignInFormProps | undefined {
        return item.email && item.password ? item : undefined;
    }
}
