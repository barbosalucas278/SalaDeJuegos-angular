import { EventEmitter, Injectable } from '@angular/core';
import { ChatMessage } from '../class/chat-message';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { AuthService } from 'src/app/services/auth.service';

@Injectable({
  providedIn: 'root',
})
export class ChatService {
  listUpdateEvent: EventEmitter<ChatMessage[]> = new EventEmitter();
  listOfMessage: ChatMessage[] = [];
  constructor(
    private db: AngularFireDatabase,
    private authService: AuthService
  ) {
    const listRef = this.db.list<string>('mensajes');    
    listRef.valueChanges().subscribe((data) => {
      this.listOfMessage = data.map((m) => JSON.parse(m));
      this.identificarMensajesDelCurrentUser();
      this.listUpdateEvent.emit(this.listOfMessage);
    });
  }
  addNewMessage(newMessage: ChatMessage) {
    const listOfMessageDB = this.db.list('mensajes');
    listOfMessageDB.push(JSON.stringify(newMessage));
    this.listUpdateEvent.emit(this.listOfMessage);
  }
  identificarMensajesDelCurrentUser(){
    this.listOfMessage.map((m) => {
      if (m.userEmail == this.authService.currenUser?.email) {
        m.isUserMessage = true;
      }else{
        m.isUserMessage = false;
      }
    });
  }
}
