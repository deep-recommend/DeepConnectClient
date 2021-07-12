import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LikeFromOthersComponent } from './like-from-others.component';

const routes: Routes = [{ path: '', component: LikeFromOthersComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LikeFromOthersRoutingModule { }
