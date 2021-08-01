import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FeatureRoutingModule } from './feature-routing.module';
import { FeatureComponent } from './feature.component';
import { FeatureCComponent } from './feature-c/feature-c.component';
import { FeaturePComponent } from './feature-p/feature-p.component';


@NgModule({
  declarations: [
    FeatureComponent,
    FeatureCComponent,
    FeaturePComponent
  ],
  imports: [
    CommonModule,
    FeatureRoutingModule
  ]
})
export class FeatureModule { }
