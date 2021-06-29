import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DeepRecommendGuard } from './general/deeprecommend.guard';

const routes: Routes = [
    {
        path: '',
        loadChildren: () =>
            import('./pages/user-search-pages/dashboard/dashboard.module').then((m) => m.DashboardModule),
    },
    {
        path: 'sign-in',
        loadChildren: () => import('./pages/user-management-pages/sign-in/sign-in.module').then((m) => m.SignInModule),
    },
    {
        path: 'sign-up',
        loadChildren: () => import('./pages/user-management-pages/sign-up/sign-up.module').then((m) => m.SignUpModule),
    },
    {
        path: 'settlement',
        loadChildren: () => import('./pages/other-pages/settlement/settlement.module').then((m) => m.SettlementModule),
        canActivate: [DeepRecommendGuard],
    },
    {
        path: 'my-page',
        loadChildren: () => import('./pages/user-management-pages/my-page/my-page.module').then((m) => m.MyPageModule),
        canActivate: [DeepRecommendGuard],
    },
    {
        path: 'search',
        loadChildren: () => import('./pages/user-search-pages/search/search.module').then((m) => m.SearchModule),
        canActivate: [DeepRecommendGuard],
    },
    {
        path: 'matching-users',
        loadChildren: () =>
            import('./pages/message-room-pages/matching-users/matching-users.module').then(
                (m) => m.MatchingUsersModule
            ),
        canActivate: [DeepRecommendGuard],
    },
    {
        path: 'message-room',
        loadChildren: () =>
            import('./pages/message-room-pages/message-room/message-room.module').then((m) => m.MessageRoomModule),
        canActivate: [DeepRecommendGuard],
    },
];
@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}
