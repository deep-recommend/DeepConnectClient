export interface UserProps {
    id: number;
    realLastName: string;
    realFirstName: string;
    stageName: string | null;
    gender: string;
    birthYear: number;
    birthMonth: number;
    birthDay: number;
    birthPlace: string;
    agency: string | null;
    profilePicture: string | null;
    email: string;
    password: string;
    passwordConfirmation: string;
}

export interface ProfileProps {
    user: {
        id: number;
        realLastName: string;
        realFirstName: string;
        stageName: string | null;
        gender: string;
        birthYear: number;
        birthMonth: number;
        birthDay: number;
        birthPlace: string;
        agency: string | null;
        profilePicture: string | null;
        email: string;
        password: string;
        passwordConfirmation: string;
    };
}
