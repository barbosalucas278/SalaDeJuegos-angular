import { Injectable } from '@angular/core';
import {
  AngularFirestore,
  AngularFirestoreDocument,
} from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
import { User } from 'src/app/class/user';
import { UserModel } from 'src/app/class/user-model';
@Injectable({
  providedIn: 'root',
})
export class LogService {
  constructor(private db: AngularFirestore) {}
  async saveCollectionLog(user: UserModel) {
    const { nick, email, fecha } = user;
    await this.db.collection('usuarios').add({
      nick: nick,
      email: email,
      fecha: fecha,
    });
  }
}
