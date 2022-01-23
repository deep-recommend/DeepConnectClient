import { NgModule } from '@angular/core'
import { DeepRecommendSharedModule } from 'src/app/general/shared.module'

import { MatchedRoutingModule } from './matched-routing.module'
import { MatchedComponent } from './matched.component';
import { MatchedCComponent } from './matched-c/matched-c.component';
import { MatchedPComponent } from './matched-p/matched-p.component';
import { MatchedDetailPComponent } from './matched-detail-p/matched-detail-p.component'
import { MatchedResolverService } from './matched.resolver';

@NgModule({
    declarations: [MatchedComponent, MatchedCComponent, MatchedPComponent, MatchedDetailPComponent],
    imports: [DeepRecommendSharedModule, MatchedRoutingModule],
    providers: [MatchedResolverService]
})
export class MatchedModule {}
