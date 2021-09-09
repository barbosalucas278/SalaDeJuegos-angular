import { EventEmitter, Injectable } from '@angular/core';
import { FirebaseApp } from '@angular/fire/compat';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { User } from '../class/user';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  statusUserChangedEvent: EventEmitter<boolean> = new EventEmitter();
  userHasLogoutEvent: EventEmitter<boolean> = new EventEmitter();
  hasLogged: boolean = false;
  currenUser?: any;
  constructor(private auth: AngularFireAuth) {}

  login(email: string, password: string) {
    return this.auth
      .signInWithEmailAndPassword(email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        this.currenUser = user;
        this.setHasLogged(true);
      });
  }
  async register(newUser: User) {
    return this.auth
      .createUserWithEmailAndPassword(newUser.email, newUser.password)
      .then(() => {
        this.auth.currentUser.then((user) => {
          user?.updateProfile({ displayName: newUser.nick });
        });
        this.setHasLogged(true);
      });
  }
  async logout() {
    this.auth.signOut().then((event) => {
      console.log(event);

      this.userHasLogoutEvent.emit(true);
      console.log(this.currenUser);
    });
  }
  setHasLogged(condition: boolean) {
    this.hasLogged = condition;
    this.statusUserChangedEvent.emit(condition);
  }
}
