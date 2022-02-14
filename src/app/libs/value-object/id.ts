import { Identifier } from './identifier';

export class Id extends Identifier<number | null> {
    constructor(id?: number) {
        super(id ? id : null);
    }
}
