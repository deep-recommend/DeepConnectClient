import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LikeFromOthersRoutingModule } from './like-from-others-routing.module';
import { LikeFromOthersComponent } from './like-from-others.component';


@NgModule({
  declarations: [
    LikeFromOthersComponent
  ],
  imports: [
    CommonModule,
    LikeFromOthersRoutingModule
  ]
})
export class LikeFromOthersModule { }
