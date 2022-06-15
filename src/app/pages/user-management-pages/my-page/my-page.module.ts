import { NgModule } from '@angular/core';

import { MyPageRoutingModule } from './my-page-routing.module';
import { MyPageComponent } from './my-page.component';
import { MyPageCComponent } from './my-page-c/my-page-c.component';
import { DeepRecommendSharedModule } from 'src/app/general/shared.module';
import { MyPagePComponent } from './my-page-p/my-page-p.component';
import { MyPageActionsPComponent } from './my-page-actions-p/my-page-actions-p.component';
import { MyPageFilterUsersPComponent } from './my-page-filter-users-p/my-page-filter-users-p.component';
import { MyPageBlockUsersPComponent } from './my-page-block-users-p/my-page-block-users-p.component';
import { MyPageResolverService } from './my-page.resolver';
import { UnblockDialogComponent } from '../unblock-dialog/unblock-dialog.component';

@NgModule({
    declarations: [
        MyPageComponent,
        MyPageCComponent,
        MyPagePComponent,
        MyPageActionsPComponent,
        MyPageFilterUsersPComponent,
        MyPageBlockUsersPComponent,
        UnblockDialogComponent,
    ],
    imports: [DeepRecommendSharedModule, MyPageRoutingModule],
    providers: [MyPageResolverService],
})
export class MyPageModule {}
