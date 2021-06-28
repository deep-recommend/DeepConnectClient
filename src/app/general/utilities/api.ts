import { HttpHeaders } from '@angular/common/http';

export const accessTokenKey: string = 'CmCn_access_token';

export const apiUrl: string = 'http://localhost:3500/api';
export const apiUserUrl: string = `${apiUrl}/users`;
export const apiAuthUrl: string = `${apiUrl}/auth/login`;
export const apiProfileUrl: string = `${apiUrl}/auth/profile`;
export const apiFeatureUrl: string = `${apiUrl}/auth/features`;
export const apiRoomUrl: string = `${apiUrl}/rooms`;
export const apiMessageUrl: string = `${apiUrl}/messages`;
export const apiEntryUrl: string = `${apiUrl}/entries`;

export const httpHeaders = {
    headers: new HttpHeaders({
        'Content-Type': 'application/json',
    }),
};

export const skTest: string = '';
export const pkTest: string = '';
