import { HttpHeaders, HttpParams } from '@angular/common/http';
import { environment } from '../../../environments/environment';

export const accessTokenKey: string = 'CmCn_access_token';

export const apiHostPort: string = environment.apiHostPort;
export const apiUrl: string = environment.apiUrl;

export const apiUserUrl: string = `${apiUrl}/users`;
export const apiAuthUrl: string = `${apiUrl}/auth/login`;
export const apiProfileUrl: string = `${apiUrl}/auth/profile`;
export const apiFeatureUrl: string = `${apiUrl}/auth/features`;
export const apiRoomUrl: string = `${apiUrl}/rooms`;
export const apiMessageUrl: string = `${apiUrl}/messages`;
export const apiEntryUrl: string = `${apiUrl}/entries`;
export const apiLikeUrl: string = `${apiUrl}/likes`;
export const apiCharacterUrl: string = `${apiUrl}/characters`;
export const apiNotificationUrl: string = `${apiUrl}/notifications`;

export const httpHeaders = {
    headers: new HttpHeaders({
        'Content-Type': 'application/json',
    }),
};

export const httpOptions = (paramKeys: string[], paramValues: string[]) => {
    let httpHeaders = new HttpHeaders();
    httpHeaders = httpHeaders.set('Content-Type', 'application/json');

    let arrIndex = 0;
    let httpParams = new HttpParams();
    for (let param of paramValues) {
        if (param) {
            httpParams = httpParams.set(paramKeys[arrIndex], param);
        }
        arrIndex += 1;
    }

    return { headers: httpHeaders, params: httpParams };
};

export const skTest: string = '';
export const pkTest: string = '';
