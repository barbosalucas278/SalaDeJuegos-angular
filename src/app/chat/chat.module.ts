import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChatRoutingModule } from './chat-routing.module';
import { ChatBoxComponent } from './chat-box/chat-box.component';
import { ChatMessageComponent } from './chat-message/chat-message.component';
import { ChatListMessageComponent } from './chat-list-message/chat-list-message.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ChatBoxComponent,
    ChatMessageComponent,
    ChatListMessageComponent
  ],
  exports: [
    ChatBoxComponent,
    ChatMessageComponent,
    ChatListMessageComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ChatRoutingModule
  ]
})
export class ChatModule { }
