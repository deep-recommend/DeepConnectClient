import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MessageRoomComponent } from './message-room.component';

const routes: Routes = [{ path: '', component: MessageRoomComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MessageRoomRoutingModule { }
