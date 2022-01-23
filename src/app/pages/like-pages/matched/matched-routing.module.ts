import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MatchedComponent } from './matched.component';
import { MatchedResolverService } from './matched.resolver';

const routes: Routes = [
  {
    path: '',
    component: MatchedComponent,
    resolve: MatchedResolverService,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MatchedRoutingModule { }
