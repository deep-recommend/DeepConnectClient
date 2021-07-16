import { Validators } from '@angular/forms'
import { SignUpFormProps, SignUpProps } from '../interfaces/sign-up.interface'

export class SignUpModel implements SignUpProps {
    realLastName!: string
    realFirstName!: string
    stageName?: string = ''
    gender!: string
    birthYear!: number
    birthMonth!: number
    birthDay!: number
    birthPlace!: string
    agency?: string = ''
    description?: string = ''
    profilePicture?: string = ''
    email!: string
    password!: string
    passwordConfirmation!: string

    constructor(value?: SignUpProps) {
        if (value) {
            this.realLastName = value.realLastName
            this.realFirstName = value.realFirstName
            this.stageName = value.stageName
            this.gender = value.gender
            this.birthYear = value.birthYear
            this.birthMonth = value.birthMonth
            this.birthDay = value.birthDay
            this.birthYear = value.birthYear
            this.birthPlace = value.birthPlace
            this.agency = value.agency
            this.description = value.description
            this.profilePicture = value.profilePicture
            this.email = value.email
            this.password = value.password
            this.passwordConfirmation = value.passwordConfirmation
        }
    }

    get value(): SignUpProps {
        return {
            realLastName: this.realLastName,
            realFirstName: this.realFirstName,
            stageName: this.stageName,
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
        }
    }

    get formGroupValue(): SignUpFormProps {
        return {
            realLastName: [this.realLastName, [Validators.required]],
            realFirstName: [this.realLastName, [Validators.required]],
            stageName: [this.stageName],
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
            passwordConfirmation: [this.passwordConfirmation, [Validators.required]],
        }
    }

    static isSignInForm(item: SignUpFormProps): SignUpFormProps | undefined {
        return item.email && item.password ? item : undefined
    }
}
