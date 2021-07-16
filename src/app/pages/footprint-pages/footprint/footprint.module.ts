import { NgModule } from '@angular/core'

import { FootprintRoutingModule } from './footprint-routing.module'
import { FootprintComponent } from './footprint.component'
import { DeepRecommendSharedModule } from 'src/app/general/shared.module'

@NgModule({
    declarations: [FootprintComponent],
    imports: [DeepRecommendSharedModule, FootprintRoutingModule],
})
export class FootprintModule {}
