import { EventEmitter, Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { User } from '../class/user';
import { UserModel } from '../class/user-model';
import { LogService } from './log/log.service';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  statusUserChangedEvent: EventEmitter<boolean> = new EventEmitter();
  userHasLogoutEvent: EventEmitter<boolean> = new EventEmitter();
  hasLogged: boolean = false;
  currenUser?: User;
  constructor(private auth: AngularFireAuth, private logService: LogService) {}

  login(email: string, password: string) {
    return this.auth
      .signInWithEmailAndPassword(email, password)
      .then(async (userCredential) => {
        const user = userCredential.user!;
        this.currenUser = new User(user.displayName!,user.email!);
        this.setHasLogged(true);
        this.saveLogUser(user);
      });
  }
  async register(newUser: User) {
    return this.auth
      .createUserWithEmailAndPassword(newUser.email, newUser.password!)
      .then(() => {
        this.auth.currentUser.then((user) => {
          user?.updateProfile({ displayName: newUser.nick });
        });
        this.setHasLogged(true);
      });
  }
  async logout() {
    this.auth.signOut().then(() => {
      this.setHasLogged(false);
    });
  }
  setHasLogged(condition: boolean) {
    this.hasLogged = condition;
    this.statusUserChangedEvent.emit(condition);
  }
  async saveLogUser(user: import('firebase/compat').default.User) {
    const fecha = new Date();
    const userModel = new UserModel(user.displayName!, user.email!, fecha);
    await this.logService.saveCollectionLog(userModel);
  }
}
