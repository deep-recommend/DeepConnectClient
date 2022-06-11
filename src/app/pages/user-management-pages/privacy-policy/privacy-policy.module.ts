import { PrivacyPolicyPComponent } from './privacy-policy-p/privacy-policy-p.component';
import { PrivacyPolicyCComponent } from './privacy-policy-c/privacy-policy-c.component';
import { NgModule } from '@angular/core';
import { PrivacyPolicyRoutingModule } from './privacy-policy-routing.module';
import { PrivacyPolicyComponent } from './privacy-policy.component';
import { DeepRecommendSharedModule } from 'src/app/general/shared.module';
import { PrivacyPolicyResolverService } from './privacy-policy.resolver';

@NgModule({
    declarations: [
        PrivacyPolicyComponent,
        PrivacyPolicyCComponent,
        PrivacyPolicyPComponent,
    ],
    imports: [DeepRecommendSharedModule, PrivacyPolicyRoutingModule],
    providers: [PrivacyPolicyResolverService],
})
export class PrivacyPolicyModule {}
