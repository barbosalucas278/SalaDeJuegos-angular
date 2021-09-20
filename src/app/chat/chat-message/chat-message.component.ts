import { Component, Input, OnInit } from '@angular/core';
import { ChatMessage } from '../class/chat-message';

@Component({
  selector: 'app-chat-message',
  templateUrl: './chat-message.component.html',
  styleUrls: ['./chat-message.component.scss'],
})
export class ChatMessageComponent implements OnInit {
  isUserMessage!: boolean;
  @Input() message?: ChatMessage;
  constructor() {}

  ngOnInit(): void {
    this.isUserMessage = this.message?.isUserMessage!;    
  }
}
