export class User {
  nick: string;
  password: string;
  email: string;
  constructor(nick: string, password: string, email: string) {
    this.nick = nick;
    this.password = password;
    this.email = email;
  }
}
