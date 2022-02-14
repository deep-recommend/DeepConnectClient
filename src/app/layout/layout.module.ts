import { NgModule } from '@angular/core';
import { LayoutComponent } from './layout.component';
import { HeaderCComponent } from './components/header/header-c/header-c.component';
import { ContentComponent } from './components/content/content.component';
import { SidenavCComponent } from './components/sidenav/sidenav-c/sidenav-c.component';
import { SidenavPComponent } from './components/sidenav/sidenav-p/sidenav-p.component';
import { DirectiveModule } from 'src/app/general/derectives/derective.module';
import { HeaderTitlePComponent } from './components/header/header-title-p/header-title-p.component';
import { DeepRecommendSharedModule } from 'src/app/general/shared.module';
import { FooterCComponent } from './components/footer/footer-c/footer-c.component';
import { FooterLogoPComponent } from './components/footer/footer-logo-p/footer-logo-p.component';
import { FooterLawPComponent } from './components/footer/footer-law-p/footer-law-p.component';
import { FooterSnsPComponent } from './components/footer/footer-sns-p/footer-sns-p.component';
import { HeaderLogoPComponent } from './components/header/header-logo-p/header-logo-p.component';
import { HeaderRoutingTabsComponent } from './components/header/header-routing-tabs/header-routing-tabs.component';

@NgModule({
    declarations: [
        LayoutComponent,

        HeaderCComponent,
        HeaderTitlePComponent,
        HeaderLogoPComponent,
        HeaderRoutingTabsComponent,

        ContentComponent,

        SidenavCComponent,
        SidenavPComponent,

        FooterCComponent,
        FooterLogoPComponent,
        FooterLawPComponent,
        FooterSnsPComponent,
    ],
    imports: [DeepRecommendSharedModule, DirectiveModule],
    exports: [LayoutComponent],
})
export class LayoutModule {}
