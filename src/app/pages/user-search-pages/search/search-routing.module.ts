import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { SearchComponent } from './search.component'
import { SearchResolverService } from './search.resolve'

const routes: Routes = [
    {
        path: '',
        component: SearchComponent,
        data: { title: '検索' },
        resolve: { from: SearchResolverService },
    },
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class SearchRoutingModule {}
