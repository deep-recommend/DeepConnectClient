import { AbstractControl, ValidationErrors } from '@angular/forms';

export interface SignUpProps {
    name: string;
    email: string;
    password: string;
    passwordConfirmation: string;
}

export interface SignUpFormProps {
    name: (string | ((control: AbstractControl) => ValidationErrors | null)[])[];
    email: (string | ((control: AbstractControl) => ValidationErrors | null)[])[];
    password: (string | ((control: AbstractControl) => ValidationErrors | null)[])[];
    passwordConfirmation: (string | ((control: AbstractControl) => ValidationErrors | null)[])[];
}
