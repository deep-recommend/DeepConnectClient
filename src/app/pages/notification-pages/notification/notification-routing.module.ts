import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { NotificationComponent } from './notification.component'
import { NotificationResolverService } from './notification.resolver'

const routes: Routes = [
    {
        path: '',
        component: NotificationComponent,
        data: { title: '通知' },
        resolve: { from: NotificationResolverService },
    },
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class NotificationRoutingModule {}
