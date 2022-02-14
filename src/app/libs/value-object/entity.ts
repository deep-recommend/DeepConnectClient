import { Id } from './id';

export abstract class Entity<T> {
    protected readonly _id: Id | undefined;
    protected props: T;

    constructor(props: T, id?: Id) {
        if (id) {
            this._id = id;
        }
        this.props = props;
    }

    isEqual(entity?: Entity<T>): boolean | undefined {
        if (entity === null || entity === undefined) {
            return false;
        }
        if (this === entity) {
            return true;
        }
        if (!(entity instanceof Entity)) {
            return false;
        }
        return this._id?.isEqual(entity._id);
    }
}
