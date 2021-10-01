import { EventEmitter, Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';
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
  constructor(private auth: AngularFireAuth, private logService: LogService) {
    this.getUserAuthState()
      .pipe(
        map<any, boolean>((user) => {
          if (user != null) {
            this.setCurrentUser(user);
          }
          return user != null;
        }),
        tap<boolean>((estado) => {
          if (!estado) {
            this.currenUser = undefined;
          }
          this.setHasLogged(estado);
          return estado;
        })
      )
      .subscribe((x) => this.setHasLogged(x));
  }
  setCurrentUser(user: any) {
    this.currenUser = new User(user.displayName!, user.email!);
  }
  login(email: string, password: string) {
    return this.auth
      .signInWithEmailAndPassword(email, password)
      .then(async (userCredential) => {
        const user = userCredential.user!;
        this.currenUser = new User(user.displayName!, user.email!);
        this.saveLogUser(user);
      });
  }
  async register(newUser: User) {
    return this.auth
      .createUserWithEmailAndPassword(newUser.email, newUser.password!)
      .then(() => {
        this.auth.currentUser.then((user) => {
          user?.updateProfile({ displayName: newUser.nick });
          this.currenUser = new User(newUser.nick, user?.email!);
        });
      });
  }
  async logout() {
    this.auth.signOut();
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
  getUserAuthState(): Observable<any> {
    return this.auth.authState;
  }
}
