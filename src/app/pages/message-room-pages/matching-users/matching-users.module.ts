import { NgModule } from '@angular/core';

import { MatchingUsersRoutingModule } from './matching-users-routing.module';
import { MatchingUsersComponent } from './matching-users.component';
import { MatchingUsersCComponent } from './matching-users-c/matching-users-c.component';
import { MatchingUsersPComponent } from './matching-users-p/matching-users-p.component';
import { DeepRecommendSharedModule } from 'src/app/general/shared.module';

@NgModule({
    declarations: [MatchingUsersComponent, MatchingUsersCComponent, MatchingUsersPComponent],
    imports: [DeepRecommendSharedModule, MatchingUsersRoutingModule],
})
export class MatchingUsersModule {}
