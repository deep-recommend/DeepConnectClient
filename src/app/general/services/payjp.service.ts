import { Injectable } from '@angular/core';
import * as Payjp from 'payjp';

@Injectable({
    providedIn: 'root',
})
export class PayjpService {
    private readonly _payjp = Payjp('sk_test_c62fade9d045b54cd76d7036');

    constructor() {}

    charges(): void {
        this._payjp.charges
            .create({
                amount: 1000,
                currency: 'jpy',
                card: 'tokenid_by_Checkout_or_payjp.js',
            })
            .then((charge: Payjp.Charge) => console.log(charge))
            .catch((e: Payjp.ResponseError) =>
                console.error(e.response!.body as Payjp.PayjpError)
            );
    }
}
