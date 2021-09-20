import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { User } from 'src/app/class/user';
import { ChatMessage } from '../class/chat-message';
import { ChatService } from '../service/chat.service';

@Component({
  selector: 'app-chat-box',
  queries: {
    messageContentRef: new ViewChild('messageContentRef'),
  },
  templateUrl: './chat-box.component.html',
  styleUrls: ['./chat-box.component.scss'],
})
export class ChatBoxComponent implements OnInit {
  @Input() currentUser!: User;
  listOfMessage: ChatMessage[] = [];
  newMessage: string = '';
  public messageContentRef!: ElementRef;
  constructor(private chatService: ChatService) {
    this.listOfMessage = this.chatService.listOfMessage;

    chatService.listUpdateEvent.subscribe((list) => {
      this.listOfMessage = list;
    });
  }
  updateScroll() {
    this.messageContentRef.nativeElement.scrollTo(
      0,
      this.messageContentRef.nativeElement!.scrollHeight
    );
  }

  ngOnInit(): void {
    this.chatService.identificarMensajesDelCurrentUser();
  }
  ngAfterViewChecked() {
    this.updateScroll();
  }
  enviarMensaje() {
    const newChatMessage = new ChatMessage(
      this.currentUser!.nick,
      this.newMessage,
      new Date().toUTCString(),
      this.currentUser!.email
    );
    this.newMessage = '';

    this.chatService.addNewMessage(newChatMessage);
    this.updateScroll();
  }
}
