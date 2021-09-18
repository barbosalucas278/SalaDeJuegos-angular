export class ChatMessage {
  userNickName: string;
  userEmail: string;
  userMessage: string;
  hourMessage: string;
  isUserMessage: boolean = false;
  /**
   * Constructor
   */
  constructor(nickName: string, message: string, hour: string,email:string) {
    this.userNickName = nickName;
    this.userMessage = message;
    this.hourMessage = hour;
    this.userEmail = email;
  }
}
