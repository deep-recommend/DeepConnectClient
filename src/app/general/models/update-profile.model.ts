import { Validators } from '@angular/forms';
import {
    UpdateProfileFormProps,
    UpdateProfileProps,
} from '../interfaces/update-profile.interface';

export class UpdateProfileModel implements UpdateProfileProps {
    realLastName!: string;
    realFirstName!: string;
    stageName?: string = '';
    position?: string = '未選択';
    gender!: string;
    birthYear!: number;
    birthMonth!: number;
    birthDay!: number;
    birthPlace!: string;
    agency?: string = '';
    description?: string = '';
    profilePicture?: string = '';
    work?: string = '';
    hobby?: string = '';
    brothersAndSisters?: string = '';
    educationalBackground?: string = '';
    height?: string = '';
    secondLanguage?: string = '';
    holiday?: string = '';
    instrument?: string = '';
    sport?: string = '';
    isDrinking?: boolean;
    isSmoking?: boolean;
    hasPet?: boolean;
    isMarried?: boolean;
    email!: string;
    password!: string;
    passwordConfirmation!: string;

    constructor(value?: UpdateProfileProps) {
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
            this.description = value.description;
            this.profilePicture = value.profilePicture;
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
