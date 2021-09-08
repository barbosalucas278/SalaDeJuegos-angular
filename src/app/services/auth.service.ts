import { EventEmitter, Injectable } from '@angular/core';
import { User } from '../class/user';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  statusUserChangedEvent: EventEmitter<boolean> = new EventEmitter();
  hasLogged: boolean = false;
  currenUser?: User;
  constructor() {}

  login() {}
  register() {}
  setHasLogged(condition: boolean) {
    this.hasLogged = condition;
    this.statusUserChangedEvent.emit(condition);
  }
}
