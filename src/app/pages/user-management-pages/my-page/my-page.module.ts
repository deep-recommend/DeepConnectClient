import { NgModule } from '@angular/core';

import { MyPageRoutingModule } from './my-page-routing.module';
import { MyPageComponent } from './my-page.component';
import { MyPageCComponent } from './my-page-c/my-page-c.component';
import { DeepRecommendSharedModule } from 'src/app/general/shared.module';

@NgModule({
    declarations: [MyPageComponent, MyPageCComponent],
    imports: [DeepRecommendSharedModule, MyPageRoutingModule],
})
export class MyPageModule {}
