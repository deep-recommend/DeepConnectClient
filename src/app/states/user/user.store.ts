import { Injectable } from '@angular/core';
import { EntityState, EntityStore, StoreConfig } from '@datorama/akita';
import { UserProps } from './user.model';

export interface UserState extends EntityState<UserProps> {}

@Injectable({ providedIn: 'root' })
@StoreConfig({
    name: 'user',
})
export class UserStore extends EntityStore<UserState> {
    constructor() {
        super();
    }

    setUsers(users: UserProps[]): void {
        this.set(users);
    }
}
