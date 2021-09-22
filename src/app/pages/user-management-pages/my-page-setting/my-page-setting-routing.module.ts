import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { MyPageSettingComponent } from './my-page-setting.component'
import { MyPageSettingResolverService } from './my-page-setting.resolver'

const routes: Routes = [
    {
        path: '',
        component: MyPageSettingComponent,
        data: { title: 'プロフィール編集' },
        resolve: { from: MyPageSettingResolverService },
    },
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class MyPageSettingRoutingModule {}
