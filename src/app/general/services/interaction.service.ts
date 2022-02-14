import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class InteractionService {
    exampleId: BehaviorSubject<number> = new BehaviorSubject<number>(Number());

    /*------------------------------------------------*/
    /*------------------------------------------------*/
    /*                   next                         */
    /*------------------------------------------------*/
    /*------------------------------------------------*/

    /**
     * 送りたい値
     * @param id
     */
    nextExampleId(id: number): void {
        this.exampleId.next(id);
    }

    /*------------------------------------------------*/
    /*------------------------------------------------*/
    /*                 getValue                       */
    /*------------------------------------------------*/
    /*------------------------------------------------*/

    getExampleId(): number {
        return this.exampleId.getValue();
    }
}
