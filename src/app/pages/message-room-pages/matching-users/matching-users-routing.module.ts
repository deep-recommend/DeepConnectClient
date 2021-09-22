import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { MatchingUsersComponent } from './matching-users.component'
import { MatchingUsersResolverService } from './matching-users.resolver'

const routes: Routes = [
    {
        path: '',
        component: MatchingUsersComponent,
        data: { title: 'メッセージ' },
        resolve: { from: MatchingUsersResolverService },
    },
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class MatchingUsersRoutingModule {}
