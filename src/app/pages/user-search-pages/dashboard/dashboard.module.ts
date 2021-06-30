import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { DashboardCComponent } from './dashboard-c/dashboard-c.component';
import { DashboardUserListPComponent } from './dashboard-user-list-p/dashboard-user-list-p.component';
import { DeepRecommendSharedModule } from 'src/app/general/shared.module';
import { DashboardToSearchPageButtonPComponent } from './dashboard-to-search-page-button-p/dashboard-to-search-page-button-p.component';

@NgModule({
    declarations: [
        DashboardComponent,
        DashboardCComponent,
        DashboardUserListPComponent,
        DashboardToSearchPageButtonPComponent,
    ],
    imports: [DeepRecommendSharedModule, DashboardRoutingModule],
})
export class DashboardModule {}
