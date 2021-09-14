export class User {
  nick: string;
  password?: string;
  email: string;
  constructor(nick: string, email: string, password?: string) {
    this.nick = nick;
    this.password = password;
    this.email = email;
  }
}
