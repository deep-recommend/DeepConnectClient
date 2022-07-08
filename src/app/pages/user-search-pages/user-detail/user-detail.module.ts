import { NgModule } from '@angular/core';

import { UserDetailRoutingModule } from './user-detail-routing.module';
import { UserDetailComponent } from './user-detail.component';
import { DeepRecommendSharedModule } from 'src/app/general/shared.module';
import { UserDetailCComponent } from './user-detail-c/user-detail-c.component';
import { UserDetailPComponent } from './user-detail-p/user-detail-p.component';
import { UserDetailLikePComponent } from './user-detail-like-p/user-detail-like-p.component';
import { UserDetailResolverService } from './user-detail.resolver';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
    declarations: [
        UserDetailComponent,
        UserDetailCComponent,
        UserDetailPComponent,
        UserDetailLikePComponent,
    ],
    imports: [
        DeepRecommendSharedModule,
        UserDetailRoutingModule,
        TranslateModule,
    ],
    providers: [UserDetailResolverService],
})
export class UserDetailModule {}
