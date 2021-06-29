import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MessageRoomRoutingModule } from './message-room-routing.module';
import { MessageRoomComponent } from './message-room.component';
import { DeepRecommendSharedModule } from 'src/app/general/shared.module';
import { MessageRoomCComponent } from './message-room-c/message-room-c.component';

@NgModule({
    declarations: [MessageRoomComponent, MessageRoomCComponent],
    imports: [DeepRecommendSharedModule, MessageRoomRoutingModule],
})
export class MessageRoomModule {}
