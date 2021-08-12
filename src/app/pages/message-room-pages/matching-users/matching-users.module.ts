import { NgModule } from '@angular/core';

import { MatchingUsersRoutingModule } from './matching-users-routing.module';
import { MatchingUsersComponent } from './matching-users.component';
import { MatchingUsersCComponent } from './matching-users-c/matching-users-c.component';
import { MatchingUsersPComponent } from './matching-users-p/matching-users-p.component';
import { DeepRecommendSharedModule } from 'src/app/general/shared.module';
import { NoMatchingUsersPComponent } from './no-matching-users-p/no-matching-users-p.component';

@NgModule({
    declarations: [MatchingUsersComponent, MatchingUsersCComponent, MatchingUsersPComponent, NoMatchingUsersPComponent],
    imports: [DeepRecommendSharedModule, MatchingUsersRoutingModule],
})
export class MatchingUsersModule {}
