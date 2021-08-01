import { Validators } from '@angular/forms'
import { UpdateProfileFormProps, UpdateProfileProps } from '../interfaces/update-profile.interface'

export class UpdateProfileModel implements UpdateProfileProps {
    realLastName!: string
    realFirstName!: string
    stageName?: string = ''
    position?: string = '未選択'
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

    constructor(value?: UpdateProfileProps) {
        if (value) {
            this.realLastName = value.realLastName
            this.realFirstName = value.realFirstName
            this.stageName = value.stageName
            this.position = value.position
            this.gender = value.gender
            this.birthYear = value.birthYear
            this.birthMonth = value.birthMonth
            this.birthDay = value.birthDay
            this.birthYear = value.birthYear
            this.birthPlace = value.birthPlace
            this.agency = value.agency
            this.description = value.description
            this.profilePicture = value.profilePicture
        }
    }

    get value(): UpdateProfileProps {
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
        }
    }

    get formGroupValue(): UpdateProfileFormProps {
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
        }
    }
}
