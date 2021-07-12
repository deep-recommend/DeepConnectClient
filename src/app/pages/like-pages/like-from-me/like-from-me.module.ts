import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LikeFromMeRoutingModule } from './like-from-me-routing.module';
import { LikeFromMeComponent } from './like-from-me.component';


@NgModule({
  declarations: [
    LikeFromMeComponent
  ],
  imports: [
    CommonModule,
    LikeFromMeRoutingModule
  ]
})
export class LikeFromMeModule { }
