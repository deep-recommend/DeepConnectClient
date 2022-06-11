import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TermsComponent } from './terms.component';
import { TermsResolverService } from './terms.resolver';

const routes: Routes = [
    {
        path: '',
        component: TermsComponent,
        data: { title: '利用規約' },
        resolve: { from: TermsResolverService },
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class TermsRoutingModule {}
