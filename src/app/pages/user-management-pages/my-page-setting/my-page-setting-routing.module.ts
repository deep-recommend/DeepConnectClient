import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MyPageSettingComponent } from './my-page-setting.component';

const routes: Routes = [{ path: '', component: MyPageSettingComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MyPageSettingRoutingModule { }
