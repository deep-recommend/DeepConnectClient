export interface UserSearchProps {
    realLastName?: string
    realFirstName?: string
    stageName?: string
    position?: string
    gender?: string
    birthYear?: number
    birthMonth?: number
    birthDay?: number
    birthPlace?: string
    height?: string
    agency?: string
    work?: string
    hobby?: string
    brothersAndSisters?: string
    educationalBackground?: string
    secondLanguage?: string
    holiday?: string
    instrument?: string
    sport?: string
    isDrinking?: boolean
    isSmoking?: boolean
    hasPet?: boolean
    isMarried?: boolean
}

export interface UserSearchFormProps {
    realLastName: (string | null | undefined)[]
    realFirstName: (string | null | undefined)[]
    stageName: (string | null | undefined)[]
    position: (string | null | undefined)[]
    gender: (string | null | undefined)[]
    birthYear: (number | null | undefined)[]
    birthMonth: (number | null | undefined)[]
    birthDay: (number | null | undefined)[]
    birthPlace: (string | null | undefined)[]
    height: (string | null | undefined)[]
    agency: (string | null | undefined)[]
    work: (string | null | undefined)[]
    hobby: (string | null | undefined)[]
    brothersAndSisters: (string | null | undefined)[]
    educationalBackground: (string | null | undefined)[]
    secondLanguage: (string | null | undefined)[]
    holiday: (string | null | undefined)[]
    instrument: (string | null | undefined)[]
    sport: (string | null | undefined)[]
    isDrinking: (boolean | null | undefined)[]
    isSmoking: (boolean | null | undefined)[]
    hasPet: (boolean | null | undefined)[]
    isMarried: (boolean | null | undefined)[]
}
