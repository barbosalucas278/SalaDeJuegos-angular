import { HttpClient } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { Preguntados } from '../class/preguntados';

@Injectable({
  providedIn: 'root',
})
export class PreguntadosService {
  vidasRestantes!: number;
  vidasChangedEvent: EventEmitter<number> = new EventEmitter();
  ceroVidasEvent = new EventEmitter();

  constructor(private http: HttpClient) {
    this.vidasRestantes = 1;
  }
  resetGameParameters() {
    this.vidasRestantes = 1;
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
  async getPregunta() {
    const key = "b7f993908a5343f982b085b85361b93e";
    const pregunta: Preguntados = {};
    const indiceRandom = generarNumeroRandom();
    const indicesIncorrectos = [
      generarNumeroRandom(indiceRandom),
      generarNumeroRandom(indiceRandom),
      generarNumeroRandom(indiceRandom),
    ];
    const url = `https://api.rawg.io/api/games/${indiceRandom}?key=${key}`;
    indicesIncorrectos.forEach((x) => {
      const urlIncorrectas = `https://api.rawg.io/api/games/${x}?key=${key}`;
      let getOpcionesIncorrectas = this.http.get<any>(urlIncorrectas).pipe(
        map((response) => {
          console.log(response);
          let opcionIncorrecta = response.name;
          return opcionIncorrecta;
        })
      );
      getOpcionesIncorrectas.toPromise().then((opcion) => {
        console.log(opcion);
      });
      pregunta.opcionesIncorrectas?.push(x);
    });
    let resultado = this.http.get<any>(url).pipe(
      map((response) => {
        let pregunta: Preguntados = {
          urlImg: response.background_image_additional,
          opcionCorrecta: response.name,
        };
        return pregunta;
      })
    );
    resultado.toPromise().then((x) => {
      pregunta.urlImg = x.urlImg;
      pregunta.opcionCorrecta = x.opcionCorrecta;
    });
    console.log(pregunta);
    return pregunta;
  }
}
/**Genera un numero aleatorio, pudiendo indicar un numero a evitar */
function generarNumeroRandom(numeroAEvitar: any = null) {
  let random = Math.floor(Math.random() * (Math.random() * 1000));

  if (numeroAEvitar != null) {
    while (random == numeroAEvitar) {
      random = Math.floor(Math.random() * (Math.random() * 1000));
    }
    return generarIdValido(random);
  }
  return generarIdValido(random);
}
function generarIdValido(numero: number) {
  let arrayNumero = numero.toString();
  let espaciosVacios = 7 - arrayNumero.length;
  let salida = '';
  for (let i = 0; i < espaciosVacios; i++) {
    salida += '0';
  }
  salida += arrayNumero;
  return salida;
}
