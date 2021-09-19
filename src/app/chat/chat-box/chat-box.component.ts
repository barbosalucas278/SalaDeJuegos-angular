import { DatePipe } from '@angular/common';
import { listLazyRoutes } from '@angular/compiler/src/aot/lazy_routes';
import { Message } from '@angular/compiler/src/i18n/i18n_ast';
import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from 'src/app/class/user';
import { ChatMessage } from '../class/chat-message';
import { ChatService } from '../service/chat.service';

@Component({
  selector: 'app-chat-box',
  templateUrl: './chat-box.component.html',
  styleUrls: ['./chat-box.component.scss'],
})
export class ChatBoxComponent implements OnInit {
  @Input() currentUser!: User;
  listOfMessage: ChatMessage[] = [];
  newMessage: string = '';
  constructor(private chatService: ChatService) {
    console.log('Inicio dle constructor antes de setear la lista');
    console.log(this.listOfMessage);
    this.listOfMessage = this.chatService.listOfMessage;
    console.log('Inicio dle constructor despues de setear la lista');
    console.log(this.listOfMessage);
    chatService.listUpdateEvent.subscribe((list) => {
      console.log('Lista antes de actualizar con el evento listUpdateEvent');
      console.log(this.listOfMessage);

      this.listOfMessage = list;
      console.log('Lista despues de actualizar con el evento listUpdateEvent');
      console.log(this.listOfMessage);
    });
  }

  ngOnInit(): void {
    this.chatService.identificarMensajesDelCurrentUser();
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
  }
}
