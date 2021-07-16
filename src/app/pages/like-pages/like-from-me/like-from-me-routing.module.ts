import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LikeFromMeComponent } from './like-from-me.component';

const routes: Routes = [{ path: '', component: LikeFromMeComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LikeFromMeRoutingModule { }
