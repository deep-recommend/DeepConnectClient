import { NgModule } from '@angular/core';

import { SettlementRoutingModule } from './settlement-routing.module';
import { SettlementComponent } from './settlement.component';
import { SettlmentCComponent } from './settlment-c/settlment-c.component';
import { DeepRecommendSharedModule } from 'src/app/general/shared.module';

@NgModule({
    declarations: [SettlementComponent, SettlmentCComponent],
    imports: [DeepRecommendSharedModule, SettlementRoutingModule],
})
export class SettlementModule {}
