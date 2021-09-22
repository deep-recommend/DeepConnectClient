import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { SignInComponent } from './sign-in.component'
import { SignInResolverService } from './sign-in.resolver'

const routes: Routes = [
    {
        path: '',
        component: SignInComponent,
        resolve: { from: SignInResolverService },
    },
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class SignInRoutingModule {}
