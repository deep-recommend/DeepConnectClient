import { NgModule } from '@angular/core'

import { MatchingUsersRoutingModule } from './matching-users-routing.module'
import { MatchingUsersComponent } from './matching-users.component'
import { MatchingUsersCComponent } from './matching-users-c/matching-users-c.component'
import { MatchingUsersPComponent } from './matching-users-p/matching-users-p.component'
import { DeepRecommendSharedModule } from 'src/app/general/shared.module'
import { NoMatchingUsersPComponent } from './no-matching-users-p/no-matching-users-p.component'
import { MatchingUsersResolverService } from './matching-users.resolver';
import { MatchingUsersDetailPComponent } from './matching-users-detail-p/matching-users-detail-p.component'

@NgModule({
    declarations: [MatchingUsersComponent, MatchingUsersCComponent, MatchingUsersPComponent, NoMatchingUsersPComponent, MatchingUsersDetailPComponent],
    imports: [DeepRecommendSharedModule, MatchingUsersRoutingModule],
    providers: [MatchingUsersResolverService],
})
export class MatchingUsersModule {}
