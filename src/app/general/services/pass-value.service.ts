import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class PassValueService {
    subject: BehaviorSubject<any> = new BehaviorSubject<any>(null);

    constructor() {}

    sendSomething(value: any): void {
        return this.subject.next(value);
    }
}
