import { NgModule } from '@angular/core'

import { MyPageRoutingModule } from './my-page-routing.module'
import { MyPageComponent } from './my-page.component'
import { MyPageCComponent } from './my-page-c/my-page-c.component'
import { DeepRecommendSharedModule } from 'src/app/general/shared.module'
import { MyPagePComponent } from './my-page-p/my-page-p.component'
import { MyPageActionsPComponent } from './my-page-actions-p/my-page-actions-p.component'
import { MyPageResolverService } from './my-page.resolver'

@NgModule({
    declarations: [MyPageComponent, MyPageCComponent, MyPagePComponent, MyPageActionsPComponent],
    imports: [DeepRecommendSharedModule, MyPageRoutingModule],
    providers: [MyPageResolverService],
})
export class MyPageModule {}
