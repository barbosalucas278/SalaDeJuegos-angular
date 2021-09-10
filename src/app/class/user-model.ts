export class UserModel {
  nick: string;
  email: string;
  fecha: Date;
  constructor(nick: string, email: string, fecha: Date) {
    this.nick = nick;
    this.email = email;
    this.fecha = fecha;
  }
}
