import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DeepRecommendGuard } from './general/deeprecommend.guard';

const routes: Routes = [
    {
        path: '',
        loadChildren: () =>
            import('./pages/user-search-pages/dashboard/dashboard.module').then(
                (m) => m.DashboardModule
            ),
    },
    {
        path: 'sign-in',
        loadChildren: () =>
            import('./pages/user-management-pages/sign-in/sign-in.module').then(
                (m) => m.SignInModule
            ),
    },
    {
        path: 'sign-up',
        loadChildren: () =>
            import('./pages/user-management-pages/sign-up/sign-up.module').then(
                (m) => m.SignUpModule
            ),
    },
    {
        path: 'my-page',
        loadChildren: () =>
            import('./pages/user-management-pages/my-page/my-page.module').then(
                (m) => m.MyPageModule
            ),
        canActivate: [DeepRecommendGuard],
    },
    {
        path: 'search',
        loadChildren: () =>
            import('./pages/user-search-pages/search/search.module').then(
                (m) => m.SearchModule
            ),
        canActivate: [DeepRecommendGuard],
    },
    {
        path: 'matching-users',
        loadChildren: () =>
            import(
                './pages/message-room-pages/matching-users/matching-users.module'
            ).then((m) => m.MatchingUsersModule),
        canActivate: [DeepRecommendGuard],
    },
    {
        path: 'message-room/:id',
        loadChildren: () =>
            import(
                './pages/message-room-pages/message-room/message-room.module'
            ).then((m) => m.MessageRoomModule),
        canActivate: [DeepRecommendGuard],
    },
    {
        path: 'user-detail/:id',
        loadChildren: () =>
            import(
                './pages/user-search-pages/user-detail/user-detail.module'
            ).then((m) => m.UserDetailModule),
        canActivate: [DeepRecommendGuard],
    },
    {
        path: 'my-page-setting',
        loadChildren: () =>
            import(
                './pages/user-management-pages/my-page-setting/my-page-setting.module'
            ).then((m) => m.MyPageSettingModule),
        canActivate: [DeepRecommendGuard],
    },
    {
        path: 'like-from-me',
        loadChildren: () =>
            import('./pages/like-pages/like-from-me/like-from-me.module').then(
                (m) => m.LikeFromMeModule
            ),
        canActivate: [DeepRecommendGuard],
    },
    {
        path: 'like-from-others',
        loadChildren: () =>
            import(
                './pages/like-pages/like-from-others/like-from-others.module'
            ).then((m) => m.LikeFromOthersModule),
        canActivate: [DeepRecommendGuard],
    },
    {
        path: 'matched',
        loadChildren: () =>
            import('./pages/like-pages/matched/matched.module').then(
                (m) => m.MatchedModule
            ),
        canActivate: [DeepRecommendGuard],
    },
    {
        path: 'feature',
        loadChildren: () =>
            import(
                './general/unused/page/feature-pages/feature/feature.module'
            ).then((m) => m.FeatureModule),
        canActivate: [DeepRecommendGuard],
    },
    {
        path: 'notification',
        loadChildren: () =>
            import(
                './pages/notification-pages/notification/notification.module'
            ).then((m) => m.NotificationModule),
        canActivate: [DeepRecommendGuard],
    },
];
@NgModule({
    imports: [RouterModule.forRoot(routes, { onSameUrlNavigation: 'reload' })],
    exports: [RouterModule],
})
export class AppRoutingModule {}
