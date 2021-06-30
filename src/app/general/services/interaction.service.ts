import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class InteractionService {
    exampleId: BehaviorSubject<string> = new BehaviorSubject<string>('');

    /*------------------------------------------------*/
    /*------------------------------------------------*/
    /*                   next                         */
    /*------------------------------------------------*/
    /*------------------------------------------------*/

    /**
     * 送りたいID
     * @param id
     */
    nextExampleId(id: string): void {
        this.exampleId.next(id);
    }

    /*------------------------------------------------*/
    /*------------------------------------------------*/
    /*                 getValue                       */
    /*------------------------------------------------*/
    /*------------------------------------------------*/

    getExampleId(): string {
        return this.exampleId.getValue();
    }
}
