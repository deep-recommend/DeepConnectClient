import { NgModule } from '@angular/core';

import { SignInRoutingModule } from './sign-in-routing.module';
import { SignInComponent } from './sign-in.component';
import { SignInCComponent } from './sign-in-c/sign-in-c.component';
import { SignInPComponent } from './sign-in-p/sign-in-p.component';
import { DeepRecommendSharedModule } from 'src/app/general/shared.module';
import { SignInResolverService } from './sign-in.resolver';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
    declarations: [SignInComponent, SignInCComponent, SignInPComponent],
    imports: [DeepRecommendSharedModule, SignInRoutingModule, TranslateModule],
    providers: [SignInResolverService],
})
export class SignInModule {}
