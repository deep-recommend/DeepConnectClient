import { Entity } from '../../value-object/entity';
import { Id } from '../../value-object/id';
import { IRouterHistory } from './i-router-history';

export class RouterHistory extends Entity<IRouterHistory> {
    get previousUrl(): string {
        return this.props.previousUrl;
    }

    get currentUrl(): string {
        return this.props.currentUrl;
    }

    get histories(): string[] {
        return this.props.histories;
    }

    private constructor(props: IRouterHistory, id?: Id) {
        super(props, id);
    }

    static create(props: IRouterHistory, id?: Id): RouterHistory {
        const routerHistory = new RouterHistory({ ...props }, id);

        return routerHistory;
    }
}
