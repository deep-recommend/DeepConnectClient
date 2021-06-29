import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MessageRoomRoutingModule } from './message-room-routing.module';
import { MessageRoomComponent } from './message-room.component';
import { DeepRecommendSharedModule } from 'src/app/general/shared.module';
import { MessageRoomCComponent } from './message-room-c/message-room-c.component';
import { MessageRoomHeaderPComponent } from './message-room-header-p/message-room-header-p.component';
import { MessageRoomScreenPComponent } from './message-room-screen-p/message-room-screen-p.component';
import { MessageRoomMessageSenderPComponent } from './message-room-message-sender-p/message-room-message-sender-p.component';

@NgModule({
    declarations: [MessageRoomComponent, MessageRoomCComponent, MessageRoomHeaderPComponent, MessageRoomScreenPComponent, MessageRoomMessageSenderPComponent],
    imports: [DeepRecommendSharedModule, MessageRoomRoutingModule],
})
export class MessageRoomModule {}
