import { HttpClient } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';
import { map, take, tap } from 'rxjs/operators';
import { Preguntados } from '../class/preguntados';

@Injectable({
  providedIn: 'root',
})
export class PreguntadosService {
  private indiceRandom = generarNumeroRandom();
  vidasRestantes!: number;
  vidasChangedEvent: EventEmitter<number> = new EventEmitter();
  ceroVidasEvent = new EventEmitter();

  constructor(private http: HttpClient) {
    this.vidasRestantes = 1;
    this.getOpcionesIncorrectas();
    this.getOpcionCorrecta();
  }
  resetGameParameters() {
    this.vidasRestantes = 1;
    this.indiceRandom = generarNumeroRandom();
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
  async armarPregunta(): Promise<Preguntados> {
    const preguntaEnJuego: Preguntados = {};
    preguntaEnJuego.opcionesIncorrectas = await this.getOpcionesIncorrectas();
    const correctas = await this.getOpcionCorrecta();
    setTimeout(() => {
      preguntaEnJuego.urlImg = correctas.urlImg;
      preguntaEnJuego.opcionCorrecta = correctas.opcionCorrecta;
    }, 1000);

    return preguntaEnJuego;
  }
  async getOpcionesIncorrectas() {
    const indicesIncorrectos = [
      generarNumeroRandom(this.indiceRandom),
      generarNumeroRandom(this.indiceRandom),
      generarNumeroRandom(this.indiceRandom),
    ];
    const indicecsIncorrectosResponse: string[] = [];
    indicesIncorrectos.forEach((x) => {
      const urlIncorrectas = `https://imdb-api.com/en/API/Name/k_uvngshml/nm${x}`;
      // const urlIncorrectas = `http://localhost:3000/actores/${x}`;
      let resultado = this.http.get<any>(urlIncorrectas).pipe(
        map((response) => {
          let opcionIncorrecta = response.name;
          return opcionIncorrecta;
        })
      );
      resultado
        .toPromise()
        .then((opcion) => indicecsIncorrectosResponse.push(opcion));
    });
    return indicecsIncorrectosResponse;
  }
  async getOpcionCorrecta() {
    const preguntaCorrecta: Preguntados = {};
    const url = `https://imdb-api.com/en/API/Name/k_uvngshml/nm${this.indiceRandom}`;
    // const url = `http://localhost:3000/actores/${this.indiceRandom}`;

    let resultado = this.http.get<any>(url).pipe(
      map((response) => {
        let pregunta = {
          urlImg: response.image,
          opcionCorrecta: response.name,
        };
        return pregunta;
      })
    );
    resultado.toPromise().then((opcion) => {
      preguntaCorrecta.urlImg = opcion.urlImg;
      preguntaCorrecta.opcionCorrecta = opcion.opcionCorrecta;
    });
    return preguntaCorrecta;
  }
}
/**Genera un numero aleatorio, pudiendo indicar un numero a evitar */
function generarNumeroRandom(numeroAEvitar: any = null) {
  //1000para imdb  |  100 para json-server
  const decimales = 1000;
  let random = Math.floor(Math.random() * (Math.random() * decimales));

  if (numeroAEvitar != null) {
    while (random == numeroAEvitar) {
      random = Math.floor(Math.random() * (Math.random() * decimales));
    }
    return generarIdValido(random);
    // return random;
  }
  return generarIdValido(random);
  // return random;
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
