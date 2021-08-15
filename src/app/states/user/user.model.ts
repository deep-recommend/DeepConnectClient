export interface UserProps {
    _id: string
    realLastName: string
    realFirstName: string
    stageName: string | null
    position: string | null
    gender: string
    birthYear: number
    birthMonth: number
    birthDay: number
    birthPlace: string
    agency: string | null
    profilePicture: string | null
    description: string | null
    work: string | null
    hobby: string | null
    brothersAndSisters: string | null
    educationalBackground: string | null
    height: string | null
    secondLanguage: string | null
    holiday: string | null
    instrument: string | null
    sport: string | null
    isDrinking: boolean | null
    isSmoking: boolean | null
    hasPet: boolean | null
    isMarried: boolean | null
    email: string
    password: string
    passwordConfirmation: string
}
