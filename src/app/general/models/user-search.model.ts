import { UserSearchFormProps, UserSearchProps } from '../interfaces/user-search.interface'

export class UserSearchModel implements UserSearchProps {
    realLastName?: string
    realFirstName?: string
    stageName?: string
    position?: string
    gender?: string
    birthYear?: number
    birthMonth?: number
    birthDay?: number
    birthPlace?: string
    agency?: string

    constructor(value?: UserSearchProps) {
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
        }
    }

    get value(): UserSearchProps {
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
        }
    }

    get formGroupValue(): UserSearchFormProps {
        return {
            realLastName: [this.realLastName],
            realFirstName: [this.realLastName],
            stageName: [this.stageName],
            gender: [this.gender],
            birthYear: [this.birthYear],
            birthMonth: [this.birthMonth],
            birthDay: [this.birthDay],
            birthPlace: [this.birthPlace],
            agency: [this.agency],
        }
    }
}
