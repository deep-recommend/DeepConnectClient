import { NgModule } from '@angular/core';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { DashboardCComponent } from './dashboard-c/dashboard-c.component';
import { DashboardUserListPComponent } from './dashboard-user-list-p/dashboard-user-list-p.component';
import { DeepRecommendSharedModule } from 'src/app/general/shared.module';
import { DashboardToSearchPageButtonPComponent } from './dashboard-to-search-page-button-p/dashboard-to-search-page-button-p.component';
import { DashboardResolverService } from './dashboard.resolver';
import { DashboardUserDetailPComponent } from './dashboard-user-detail-p/dashboard-user-detail-p.component';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
    declarations: [
        DashboardComponent,
        DashboardCComponent,
        DashboardUserListPComponent,
        DashboardToSearchPageButtonPComponent,
        DashboardUserDetailPComponent,
    ],
    imports: [
        DeepRecommendSharedModule,
        DashboardRoutingModule,
        TranslateModule,
    ],
    providers: [DashboardResolverService],
})
export class DashboardModule {}
