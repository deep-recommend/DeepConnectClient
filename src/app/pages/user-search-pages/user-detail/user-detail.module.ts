import { NgModule } from '@angular/core';

import { UserDetailRoutingModule } from './user-detail-routing.module';
import { UserDetailComponent } from './user-detail.component';
import { DeepRecommendSharedModule } from 'src/app/general/shared.module';

@NgModule({
    declarations: [UserDetailComponent],
    imports: [DeepRecommendSharedModule, UserDetailRoutingModule],
})
export class UserDetailModule {}
