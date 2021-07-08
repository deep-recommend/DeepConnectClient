export interface UserProps {
    id: string
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
    email: string
    password: string
    passwordConfirmation: string
}

export interface ProfileProps {
    user: {
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
        like: []
        email: string
        password: string
        passwordConfirmation: string
    }
}
