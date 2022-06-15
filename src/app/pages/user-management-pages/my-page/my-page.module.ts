import { NgModule } from '@angular/core';

import { MyPageRoutingModule } from './my-page-routing.module';
import { MyPageComponent } from './my-page.component';
import { MyPageCComponent } from './my-page-c/my-page-c.component';
import { DeepRecommendSharedModule } from 'src/app/general/shared.module';
import { MyPagePComponent } from './my-page-p/my-page-p.component';
import { MyPageActionsPComponent } from './my-page-actions-p/my-page-actions-p.component';
import { MyPageTreePComponent } from './my-page-tree-p/my-page-tree-p.component';
import { MyPageResolverService } from './my-page.resolver';
import { MyPagePanelUserDetailPComponent } from './my-page-panel-user-detail-p/my-page-panel-user-detail-p.component';

@NgModule({
    declarations: [
        MyPageComponent,
        MyPageCComponent,
        MyPagePComponent,
        MyPageActionsPComponent,
        MyPageTreePComponent,
        MyPagePanelUserDetailPComponent,
    ],
    imports: [DeepRecommendSharedModule, MyPageRoutingModule],
    providers: [MyPageResolverService],
})
export class MyPageModule {}
