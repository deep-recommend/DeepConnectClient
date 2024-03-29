import { NgModule } from '@angular/core';

import { SearchRoutingModule } from './search-routing.module';
import { SearchComponent } from './search.component';
import { SearchCComponent } from './search-c/search-c.component';
import { SearchFormPComponent } from './search-form-p/search-form-p.component';
import { DeepRecommendSharedModule } from 'src/app/general/shared.module';
import { SearchResolverService } from './search.resolve';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
    declarations: [SearchComponent, SearchCComponent, SearchFormPComponent],
    imports: [DeepRecommendSharedModule, SearchRoutingModule, TranslateModule],
    providers: [SearchResolverService],
})
export class SearchModule {}
