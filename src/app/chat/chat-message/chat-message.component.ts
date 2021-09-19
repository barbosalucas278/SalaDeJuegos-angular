import { Component, Input, OnInit } from '@angular/core';
import { ChatMessage } from '../class/chat-message';

@Component({
  selector: 'app-chat-message',
  templateUrl: './chat-message.component.html',
  styleUrls: ['./chat-message.component.scss'],
})
export class ChatMessageComponent implements OnInit {
  positionMessage: string = '';
  @Input() message?: ChatMessage;
  constructor() {}

  ngOnInit(): void {
    if (this.message?.isUserMessage) {
      this.positionMessage = 'chat-right';
    } else {
      this.positionMessage = 'chat-left';
    }
  }
}
