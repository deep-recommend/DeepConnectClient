import { HttpHeaders } from '@angular/common/http';

export const accessTokenKey: string = 'apiの認証トークン';

export const apiUrl: string = 'apiのURL';
export const apiUserUrl: string = 'apiのURL/user';

export const httpHeaders = {
    headers: new HttpHeaders({
        'Content-Type': 'application/json',
    }),
};
