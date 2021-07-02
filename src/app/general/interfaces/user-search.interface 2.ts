export interface UserSearchProps {
    realLastName?: string;
    realFirstName?: string;
    stageName?: string;
    gender?: string;
    birthYear?: number;
    birthMonth?: number;
    birthDay?: number;
    birthPlace?: string;
    agency?: string;
}

export interface UserSearchFormProps {
    realLastName: (string | null | undefined)[];
    realFirstName: (string | null | undefined)[];
    stageName: (string | null | undefined)[];
    gender: (string | null | undefined)[];
    birthYear: (number | null | undefined)[];
    birthMonth: (number | null | undefined)[];
    birthDay: (number | null | undefined)[];
    birthPlace: (string | null | undefined)[];
    agency: (string | null | undefined)[];
}
