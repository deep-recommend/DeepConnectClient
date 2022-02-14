import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LikeFromOthersComponent } from './like-from-others.component';
import { LikeFromOthersResolverService } from './like-from-others.resolver';

const routes: Routes = [
    {
        path: '',
        component: LikeFromOthersComponent,
        resolve: { from: LikeFromOthersResolverService },
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class LikeFromOthersRoutingModule {}
