import { HttpClient } from '@angular/common/http';
import { analyzeAndValidateNgModules } from '@angular/compiler';
import { EventEmitter, Injectable } from '@angular/core';
import { map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class PreguntadosService {
  private indiceRandom = generarNumeroRandom();
  vidasRestantes!: number;
  vidasChangedEvent: EventEmitter<number> = new EventEmitter();
  OpcionesIncorrectasEvent: EventEmitter<string> = new EventEmitter();
  OpcionCorrectaEvent: EventEmitter<any> = new EventEmitter();
  ceroVidasEvent = new EventEmitter();

  constructor(private http: HttpClient) {
    this.vidasRestantes = 1;
    this.getOpcionesIncorrectas();
    this.getOpcionCorrecta();
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
  getOpcionesIncorrectas() {
    const indicesIncorrectos = [
      generarNumeroRandom(this.indiceRandom),
      generarNumeroRandom(this.indiceRandom),
      generarNumeroRandom(this.indiceRandom),
    ];
    indicesIncorrectos.forEach((x) => {
      const urlIncorrectas = `https://imdb-api.com/en/API/Name/k_uvngshml/nm${x}`;
      this.http
        .get<any>(urlIncorrectas)
        .pipe(
          map((response) => {
            let opcionIncorrecta = response.name;
            return opcionIncorrecta;
          })
        )
        .subscribe((opcion) => {
          console.log(opcion);
          this.OpcionesIncorrectasEvent.emit(opcion);
        });
    });
  }
  getOpcionCorrecta() {
    const url = `https://imdb-api.com/en/API/Name/k_uvngshml/nm${this.indiceRandom}`;
    this.http
      .get<any>(url)
      .pipe(
        map((response) => {
          let pregunta = {
            urlImg: response.image,
            opcionCorrecta: response.name,
          };
          return pregunta;
        })
      )
      .subscribe((opcion) => {
        console.log(opcion);

        this.OpcionCorrectaEvent.emit(opcion);
      });

    // const pregunta: Preguntados = {
    //   urlImg:
    //     'https://static.wikia.nocookie.net/doblaje/images/7/71/Jackblack.jpg/revision/latest/top-crop/width/360/height/450?cb=20140715053129&path-prefix=es',
    //   opcionCorrecta: 'Jack Black',
    //   opcionesIncorrectas: ['Peter Lanzani', 'Susana Gimenez', 'Micky Mouse'],
    // };
    // this.preguntaEnJuego = pregunta;
    // console.log(this.preguntaEnJuego);
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
