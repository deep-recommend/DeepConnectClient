export interface UserProps {
    _id: string
    realLastName: string
    realFirstName: string
    stageName: string | null
    gender: string
    birthYear: number
    birthMonth: number
    birthDay: number
    birthPlace: string
    agency: string | null
    profilePicture: string | null
    description: string | null
    email: string
    password: string
    passwordConfirmation: string
}
