import { AbstractControl, ValidationErrors } from '@angular/forms';

export interface SignInProps {
    email: string;
    password: string;
    isDuplicate?: boolean;
}

export interface SignInFormProps {
    email: (
        | string
        | ((control: AbstractControl) => ValidationErrors | null)[]
    )[];
    password: (
        | string
        | ((control: AbstractControl) => ValidationErrors | null)[]
    )[];
}
