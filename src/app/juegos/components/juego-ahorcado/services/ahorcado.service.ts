import { HttpClient } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { Letra } from '../class/letra';
import { Palabra } from '../class/palabra';


@Injectable({
  providedIn: 'root',
})
export class AhorcadoService {
  vidasRestantes: number;
  vidasChangedEvent: EventEmitter<number> = new EventEmitter();
  ceroVidasEvent = new EventEmitter();
  constructor(private http: HttpClient) {
    this.vidasRestantes = 7;
  }
  resetGameParameters() {
    this.vidasRestantes = 7;
    this.vidasChangedEvent.emit();
  }
  restarVida() {
    this.vidasRestantes--;
    if (this.vidasRestantes == 0) {
      this.ceroVidasEvent.emit();
    } else {
      this.vidasChangedEvent.emit(this.vidasRestantes);
    }
  }
  async getPalabra() {
    const url = 'https://palabras-aleatorias-public-api.herokuapp.com/random';
    let palabra: Palabra = new Palabra("");

    let resultado = this.http.get<any>(url).pipe(
      map((response) => removeAccents(String(response.body.Word).split(' ')[0])),
    );
    await resultado.toPromise().then((p) => {
      palabra = new Palabra(p);
    });
    return palabra;
  }
  getLEtrasDisplay() {
    const letras = [
      new Letra('q'),
      new Letra('w'),
      new Letra('e'),
      new Letra('r'),
      new Letra('t'),
      new Letra('y'),
      new Letra('u'),
      new Letra('i'),
      new Letra('o'),
      new Letra('p'),
      new Letra('a'),
      new Letra('s'),
      new Letra('d'),
      new Letra('f'),
      new Letra('g'),
      new Letra('h'),
      new Letra('j'),
      new Letra('k'),
      new Letra('l'),
      new Letra('ñ'),
      new Letra('z'),
      new Letra('x'),
      new Letra('c'),
      new Letra('v'),
      new Letra('b'),
      new Letra('n'),
      new Letra('m'),
    ];
    return letras;
  }
}
const removeAccents = (str:string) => {
  return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
}
