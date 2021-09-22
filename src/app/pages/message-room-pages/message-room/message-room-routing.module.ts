import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { MessageRoomComponent } from './message-room.component'
import { MessageRoomResolverService } from './message-room.resolver'

const routes: Routes = [
    {
        path: '',
        component: MessageRoomComponent,
        data: { title: 'メッセージ中' },
        resolve: { from: MessageRoomResolverService },
    },
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class MessageRoomRoutingModule {}
