import { NgModule } from '@angular/core';
import { LayoutComponent } from './layout.component';
import { HeaderCComponent } from './components/header/header-c/header-c.component';
import { ContentComponent } from './components/content/content.component';
import { HeaderUserMenuPComponent } from './components/header/header-user-menu-p/header-user-menu-p.component';
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
import { HeaderHamburgerMenuPComponent } from './components/header/header-hamburger-menu-p/header-hamburger-menu-p.component';
import { HeaderSignInPComponent } from './components/header/header-sign-in-p/header-sign-in-p.component';
import { HeaderSignUpPComponent } from './components/header/header-sign-up-p/header-sign-up-p.component';

@NgModule({
    declarations: [
        LayoutComponent,
        HeaderCComponent,
        ContentComponent,
        HeaderHamburgerMenuPComponent,
        HeaderUserMenuPComponent,
        SidenavCComponent,
        SidenavPComponent,
        HeaderTitlePComponent,
        FooterCComponent,
        FooterLogoPComponent,
        FooterLawPComponent,
        FooterSnsPComponent,
        HeaderLogoPComponent,
        HeaderHamburgerMenuPComponent,
        HeaderSignInPComponent,
        HeaderSignUpPComponent,
    ],
    imports: [DeepRecommendSharedModule, DirectiveModule],
    exports: [LayoutComponent],
})
export class LayoutModule {}
