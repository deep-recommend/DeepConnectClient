import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MyPageComponent } from './my-page.component';
import { MyPageResolverService } from './my-page.resolver';

const routes: Routes = [
    {
        path: '',
        component: MyPageComponent,
        data: { title: 'マイページ' },
        resolve: { from: MyPageResolverService },
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class MyPageRoutingModule {}
