import { Injectable } from '@angular/core';
import {
  AngularFirestore,
  AngularFirestoreCollection,
} from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
import { PuntajeLista } from '../class/puntaje-lista';

@Injectable({
  providedIn: 'root',
})
export class ResultadosService {
  constructor(private db: AngularFirestore) {}
  getResultados(juego: string) {
    return this.db.collection(`${juego}`).valueChanges() as Observable<
      PuntajeLista[]
    >;
  }
}
