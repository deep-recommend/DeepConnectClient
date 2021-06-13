import { AbstractControl, ValidationErrors } from '@angular/forms';

export interface UserProps {
    name: string;
    email: string;
}

export interface UserFormProps {
    name: (string | ((control: AbstractControl) => ValidationErrors | null)[])[];
    email: (string | ((control: AbstractControl) => ValidationErrors | null)[])[];
}
