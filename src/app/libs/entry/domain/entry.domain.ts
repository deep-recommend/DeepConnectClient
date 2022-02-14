import { Entity } from '../../value-object/entity';

export interface IEntryDomain {
    readonly id: number;
    readonly userId: number;
    readonly roomId: number;
}

export class EntryDomain extends Entity<IEntryDomain> {
    static create(props: IEntryDomain): EntryDomain {
        return new EntryDomain(props);
    }
}
