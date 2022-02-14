import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserDetailComponent } from './user-detail.component';
import { UserDetailResolverService } from './user-detail.resolver';

const routes: Routes = [
    {
        path: '',
        component: UserDetailComponent,
        data: { title: 'ユーザー詳細' },
        resolve: { from: UserDetailResolverService },
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class UserDetailRoutingModule {}
