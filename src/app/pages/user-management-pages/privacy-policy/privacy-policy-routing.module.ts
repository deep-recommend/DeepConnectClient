import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PrivacyPolicyComponent } from './privacy-policy.component';
import { PrivacyPolicyResolverService } from './privacy-policy.resolver';

const routes: Routes = [
    {
        path: '',
        component: PrivacyPolicyComponent,
        data: { title: 'プライバシーポリシー' },
        resolve: { from: PrivacyPolicyResolverService },
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class PrivacyPolicyRoutingModule {}
