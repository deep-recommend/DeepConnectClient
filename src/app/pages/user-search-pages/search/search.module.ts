import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SearchRoutingModule } from './search-routing.module';
import { SearchComponent } from './search.component';
import { SearchCComponent } from './search-c/search-c.component';
import { SearchFormPComponent } from './search-form-p/search-form-p.component';
import { DeepRecommendSharedModule } from 'src/app/general/shared.module';

@NgModule({
    declarations: [SearchComponent, SearchCComponent, SearchFormPComponent],
    imports: [DeepRecommendSharedModule, SearchRoutingModule],
})
export class SearchModule {}
