import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignUpComponent } from './sign-up.component';
import { SignUpResolverService } from './sign-up.resolver';

const routes: Routes = [
    {
        path: '',
        component: SignUpComponent,
        resolve: { from: SignUpResolverService },
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class SignUpRoutingModule {}
