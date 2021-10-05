import { Injectable } from '@angular/core';
import {
  AngularFirestore,
  AngularFirestoreDocument,
} from '@angular/fire/compat/firestore';
import { Encuesta } from 'src/app/class/encuesta';
import { UserModel } from 'src/app/class/user-model';
import { PuntajeJuego } from 'src/app/juegos/class/puntaje-juego';
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
  async savePuntajeJuegos(resultados: PuntajeJuego) {
    const { nombreJuego, puntaje, usuario } = resultados;
    const docRef = await this.db.collection(`${nombreJuego}`);
    await docRef.add({
      usuario: usuario.email,
      puntaje: puntaje,
      fecha: new Date(),
    });
  }
  async saveEncuesta(resultados: Encuesta) {
    const {
      emailUsuario,
      nombre,
      apellido,
      edad,
      telefono,
      gustos,
      dispositivoPreferido,
      jugardorExtremo,
      fecha,
    } = resultados;
    
    const docRef = await this.db.collection("encuestas");
    await docRef.add({
      emailUsuario: emailUsuario,
      nombre: nombre,
      apellido: apellido,
      edad: edad,
      telefono: telefono,
      gustos: gustos,
      dispositivoPreferido: dispositivoPreferido,
      jugardorExtremo: jugardorExtremo,
      fecha: fecha,
    });
    
  }
}
