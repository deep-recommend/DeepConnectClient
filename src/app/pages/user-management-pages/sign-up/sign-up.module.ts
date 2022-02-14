import { NgModule } from '@angular/core';

import { SignUpRoutingModule } from './sign-up-routing.module';
import { SignUpComponent } from './sign-up.component';
import { SignUpCComponent } from './sign-up-c/sign-up-c.component';
import { SignUpPComponent } from './sign-up-p/sign-up-p.component';
import { DeepRecommendSharedModule } from 'src/app/general/shared.module';
import { SignUpResolverService } from './sign-up.resolver';

@NgModule({
    declarations: [SignUpComponent, SignUpCComponent, SignUpPComponent],
    imports: [DeepRecommendSharedModule, SignUpRoutingModule],
    providers: [SignUpResolverService],
})
export class SignUpModule {}
