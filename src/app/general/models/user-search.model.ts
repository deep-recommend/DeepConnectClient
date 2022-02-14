import {
    UserSearchFormProps,
    UserSearchProps,
} from '../interfaces/user-search.interface';

export class UserSearchModel implements UserSearchProps {
    realLastName?: string;
    realFirstName?: string;
    stageName?: string;
    position?: string;
    gender?: string;
    birthYear?: number;
    birthMonth?: number;
    birthDay?: number;
    birthPlace?: string;
    agency?: string;
    work?: string;
    hobby?: string;
    brothersAndSisters?: string;
    educationalBackground?: string;
    height?: string;
    secondLanguage?: string;
    holiday?: string;
    instrument?: string;
    sport?: string;
    isDrinking?: boolean;
    isSmoking?: boolean;
    hasPet?: boolean;
    isMarried?: boolean;

    constructor(value?: UserSearchProps) {
        if (value) {
            this.realLastName = value.realLastName;
            this.realFirstName = value.realFirstName;
            this.stageName = value.stageName;
            this.position = value.position;
            this.gender = value.gender;
            this.birthYear = value.birthYear;
            this.birthMonth = value.birthMonth;
            this.birthDay = value.birthDay;
            this.birthYear = value.birthYear;
            this.birthPlace = value.birthPlace;
            this.agency = value.agency;
            this.work = value.work;
            this.hobby = value.hobby;
            this.brothersAndSisters = value.brothersAndSisters;
            this.educationalBackground = value.educationalBackground;
            this.height = value.height;
            this.secondLanguage = value.secondLanguage;
            this.holiday = value.holiday;
            this.instrument = value.instrument;
            this.sport = value.sport;
            this.isDrinking = value.isDrinking;
            this.isSmoking = value.isSmoking;
            this.hasPet = value.hasPet;
            this.isMarried = value.isMarried;
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
            work: this.work,
            hobby: this.hobby,
            brothersAndSisters: this.brothersAndSisters,
            educationalBackground: this.educationalBackground,
            height: this.height,
            secondLanguage: this.secondLanguage,
            holiday: this.holiday,
            instrument: this.instrument,
            sport: this.sport,
            isDrinking: this.isDrinking,
            isSmoking: this.isSmoking,
            hasPet: this.hasPet,
            isMarried: this.isMarried,
        };
    }

    get formGroupValue(): UserSearchFormProps {
        return {
            realLastName: [this.realLastName],
            realFirstName: [this.realLastName],
            stageName: [this.stageName],
            position: [this.position],
            gender: [this.gender],
            birthYear: [this.birthYear],
            birthMonth: [this.birthMonth],
            birthDay: [this.birthDay],
            birthPlace: [this.birthPlace],
            agency: [this.agency],
            work: [this.work],
            hobby: [this.hobby],
            brothersAndSisters: [this.brothersAndSisters],
            educationalBackground: [this.educationalBackground],
            height: [this.height],
            secondLanguage: [this.secondLanguage],
            holiday: [this.holiday],
            instrument: [this.instrument],
            sport: [this.sport],
            isDrinking: [this.isDrinking],
            isSmoking: [this.isSmoking],
            hasPet: [this.hasPet],
            isMarried: [this.isMarried],
        };
    }
}
