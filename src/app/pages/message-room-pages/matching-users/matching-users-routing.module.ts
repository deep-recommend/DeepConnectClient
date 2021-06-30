import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MatchingUsersComponent } from './matching-users.component';

const routes: Routes = [{ path: '', component: MatchingUsersComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MatchingUsersRoutingModule { }
