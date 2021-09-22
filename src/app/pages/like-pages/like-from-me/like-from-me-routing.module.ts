import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { LikeFromMeComponent } from './like-from-me.component'
import { LikeFromMeResolverService } from './like-from-me.resolver'

const routes: Routes = [
    {
        path: '',
        component: LikeFromMeComponent,
        resolve: { from: LikeFromMeResolverService },
    },
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class LikeFromMeRoutingModule {}
