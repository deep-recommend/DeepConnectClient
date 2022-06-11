import { NgModule } from '@angular/core';
import { TermsRoutingModule } from './terms-routing.module';
import { TermsComponent } from './terms.component';
import { TermsCComponent } from './terms-c/terms-c.component';
import { TermsPComponent } from './terms-p/terms-p.component';
import { DeepRecommendSharedModule } from 'src/app/general/shared.module';
import { TermsResolverService } from './terms.resolver';

@NgModule({
    declarations: [TermsComponent, TermsCComponent, TermsPComponent],
    imports: [DeepRecommendSharedModule, TermsRoutingModule],
    providers: [TermsResolverService],
})
export class TermsModule {}
