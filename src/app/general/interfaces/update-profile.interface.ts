import { AbstractControl, ValidationErrors } from '@angular/forms';

export interface UpdateProfileProps {
    realLastName: string;
    realFirstName: string;
    stageName?: string;
    position?: string;
    gender: string;
    birthYear: number;
    birthMonth: number;
    birthDay: number;
    birthPlace: string;
    agency?: string;
    description?: string;
    profilePicture?: string;
    work?: string;
    hobby?: string;
    brothersAndSisters?: string;
    educationalBackground?: string;
    height?: string;
    secondLanguage?: string;
    holiday?: string;
    instrument?: string;
    sport?: string;
    isDrinking?: boolean;
    isSmoking?: boolean;
    hasPet?: boolean;
    isMarried?: boolean;
}

export interface UpdateProfileFormProps {
    realLastName: (
        | string
        | ((control: AbstractControl) => ValidationErrors | null)[]
    )[];
    realFirstName: (
        | string
        | ((control: AbstractControl) => ValidationErrors | null)[]
    )[];
    stageName: (string | null | undefined)[];
    position: (string | null | undefined)[];
    work: (string | null | undefined)[];
    hobby: (string | null | undefined)[];
    brothersAndSisters: (string | null | undefined)[];
    educationalBackground: (string | null | undefined)[];
    height: (string | null | undefined)[];
    secondLanguage: (string | null | undefined)[];
    holiday: (string | null | undefined)[];
    instrument: (string | null | undefined)[];
    sport: (string | null | undefined)[];
    isDrinking: (boolean | null | undefined)[];
    isSmoking: (boolean | null | undefined)[];
    hasPet: (boolean | null | undefined)[];
    isMarried: (boolean | null | undefined)[];
    gender: (
        | string
        | ((control: AbstractControl) => ValidationErrors | null)[]
    )[];
    birthYear: (
        | number
        | ((control: AbstractControl) => ValidationErrors | null)[]
    )[];
    birthMonth: (
        | number
        | ((control: AbstractControl) => ValidationErrors | null)[]
    )[];
    birthDay: (
        | number
        | ((control: AbstractControl) => ValidationErrors | null)[]
    )[];
    birthPlace: (
        | string
        | ((control: AbstractControl) => ValidationErrors | null)[]
    )[];
    agency: (string | null | undefined)[];
    description: (string | null | undefined)[];
    profilePicture: (string | null | undefined)[];
}
