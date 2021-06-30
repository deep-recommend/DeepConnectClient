import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SettlementComponent } from './settlement.component';

const routes: Routes = [{ path: '', component: SettlementComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SettlementRoutingModule { }
