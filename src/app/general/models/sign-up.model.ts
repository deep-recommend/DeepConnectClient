import { AbstractControl, ValidationErrors, Validators } from '@angular/forms';
import { SignUpFormProps, SignUpProps } from '../interfaces/sign-up.interface';

export class SignUpModel implements SignUpProps {
    realLastName!: string;
    realFirstName!: string;
    stageName?: string = '';
    position?: string = '';
    gender!: string;
    birthYear: number = 0;
    birthMonth: number = 0;
    birthDay: number = 0;
    birthPlace: string = '';
    agency?: string = '';
    description?: string = '';
    profilePicture?: string = '';
    email!: string;
    password!: string;
    passwordConfirmation!: string;
    checkedTerms: boolean = false;

    constructor(value?: SignUpProps) {
        if (value) {
            this.realLastName = value.realLastName;
            this.realFirstName = value.realFirstName;
            this.stageName = value.stageName;
            this.position = value.position;
            this.gender = value.gender;
            this.birthYear = value.birthYear;
            this.birthMonth = value.birthMonth;
            this.birthDay = value.birthDay;
            this.birthYear = value.birthYear;
            this.birthPlace = value.birthPlace;
            this.agency = value.agency;
            this.description = value.description;
            this.profilePicture = value.profilePicture;
            this.email = value.email;
            this.password = value.password;
            this.passwordConfirmation = value.passwordConfirmation;
            this.checkedTerms = value.checkedTerms;
        }
    }

    get value(): SignUpProps {
        return {
            realLastName: this.realLastName,
            realFirstName: this.realFirstName,
            stageName: this.stageName,
            position: this.position,
            gender: this.gender,
            birthYear: this.birthYear,
            birthMonth: this.birthMonth,
            birthDay: this.birthDay,
            birthPlace: this.birthPlace,
            agency: this.agency,
            description: this.description,
            profilePicture: this.profilePicture,
            email: this.email,
            password: this.password,
            passwordConfirmation: this.passwordConfirmation,
            checkedTerms: this.checkedTerms,
        };
    }

    get formGroupValue(): SignUpFormProps {
        return {
            realLastName: [this.realLastName, [Validators.required]],
            realFirstName: [this.realLastName, [Validators.required]],
            stageName: [this.stageName],
            position: [this.position],
            gender: [this.gender, [Validators.required]],
            birthYear: [this.birthYear, [Validators.required]],
            birthMonth: [this.birthMonth, [Validators.required]],
            birthDay: [this.birthDay, [Validators.required]],
            birthPlace: [this.birthPlace, [Validators.required]],
            agency: [this.agency],
            description: [this.description],
            profilePicture: [this.profilePicture],
            email: [this.email, [Validators.required, Validators.email]],
            password: [this.password, [Validators.required]],
            passwordConfirmation: [
                this.passwordConfirmation,
                [Validators.required],
            ],
            checkedTerms: [
                this.checkedTerms,
                [
                    Validators.required,
                    (control: AbstractControl): ValidationErrors | null => {
                        return !control.value ? { checkedTerms: true } : null;
                    },
                ],
            ],
        };
    }

    static isSignInForm(item: SignUpFormProps): SignUpFormProps | undefined {
        return item.email && item.password ? item : undefined;
    }
}
