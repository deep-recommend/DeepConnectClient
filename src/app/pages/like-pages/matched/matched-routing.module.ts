import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MatchedComponent } from './matched.component';

const routes: Routes = [{ path: '', component: MatchedComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MatchedRoutingModule { }
