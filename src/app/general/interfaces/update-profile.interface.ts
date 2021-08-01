import { AbstractControl, ValidationErrors } from '@angular/forms'

export interface UpdateProfileProps {
    realLastName: string
    realFirstName: string
    stageName?: string
    position?: string
    gender: string
    birthYear: number
    birthMonth: number
    birthDay: number
    birthPlace: string
    agency?: string
    description?: string
    profilePicture?: string
}

export interface UpdateProfileFormProps {
    realLastName: (string | ((control: AbstractControl) => ValidationErrors | null)[])[]
    realFirstName: (string | ((control: AbstractControl) => ValidationErrors | null)[])[]
    stageName: (string | null | undefined)[]
    position: (string | null | undefined)[]
    gender: (string | ((control: AbstractControl) => ValidationErrors | null)[])[]
    birthYear: (number | ((control: AbstractControl) => ValidationErrors | null)[])[]
    birthMonth: (number | ((control: AbstractControl) => ValidationErrors | null)[])[]
    birthDay: (number | ((control: AbstractControl) => ValidationErrors | null)[])[]
    birthPlace: (string | ((control: AbstractControl) => ValidationErrors | null)[])[]
    agency: (string | null | undefined)[]
    description: (string | null | undefined)[]
    profilePicture: (string | null | undefined)[]
}
