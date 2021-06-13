import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    { path: '', loadChildren: () => import('./pages/dashboard/dashboard.module').then((m) => m.DashboardModule) },
    { path: 'sign-in', loadChildren: () => import('./pages/sign-in/sign-in.module').then((m) => m.SignInModule) },
    { path: 'sign-up', loadChildren: () => import('./pages/sign-up/sign-up.module').then((m) => m.SignUpModule) },
];
@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}
