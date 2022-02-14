import { NgModule } from '@angular/core';

import { MessageRoomRoutingModule } from './message-room-routing.module';
import { MessageRoomComponent } from './message-room.component';
import { DeepRecommendSharedModule } from 'src/app/general/shared.module';
import { MessageRoomCComponent } from './message-room-c/message-room-c.component';
import { MessageRoomHeaderPComponent } from './message-room-header-p/message-room-header-p.component';
import { MessageRoomScreenPComponent } from './message-room-screen-p/message-room-screen-p.component';
import { MessageRoomMessageSenderPComponent } from './message-room-message-sender-p/message-room-message-sender-p.component';
import { MessageRoomIsFalsePComponent } from './message-room-is-false-p/message-room-is-false-p.component';
import { MessageRoomScrollToBottomButtonPComponent } from './message-room-scroll-to-bottom-button-p/message-room-scroll-to-bottom-button-p.component';
import { MessageRoomResolverService } from './message-room.resolver';

@NgModule({
    declarations: [
        MessageRoomComponent,
        MessageRoomCComponent,
        MessageRoomHeaderPComponent,
        MessageRoomScreenPComponent,
        MessageRoomMessageSenderPComponent,
        MessageRoomIsFalsePComponent,
        MessageRoomScrollToBottomButtonPComponent,
    ],
    imports: [DeepRecommendSharedModule, MessageRoomRoutingModule],
    providers: [MessageRoomResolverService],
})
export class MessageRoomModule {}
