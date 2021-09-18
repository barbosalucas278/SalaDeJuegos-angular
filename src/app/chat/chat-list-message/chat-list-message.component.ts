import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ChatMessage } from '../class/chat-message';

@Component({
  selector: 'app-chat-list-message',
  templateUrl: './chat-list-message.component.html',
  styleUrls: ['./chat-list-message.component.scss'],
})
export class ChatListMessageComponent implements OnInit {
  @Input() listOfMessage?: ChatMessage[];
  constructor() {}

  ngOnInit(): void {}
}
