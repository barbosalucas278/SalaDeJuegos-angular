import { HttpClient } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
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
    this.getPalabra();
  }
  restarVida() {
    this.vidasRestantes--;
    if (this.vidasRestantes > 0) {
      this.vidasChangedEvent.emit(this.vidasRestantes);
    } else {
      this.ceroVidasEvent.emit();
    }
  }
  getPalabra(){
    // const url = 'https://palabras-aleatorias-public-api.herokuapp.com/random';
    // let palabra;
    // this.http.get(url).subscribe(
    //   (x: any) => {
    //     console.log(x.body.Word);
    //     palabra = new Palabra(x.body.Word);
    //   },
    //   (error) => {
    //     console.log(error);
    //   }
    // );
    // return palabra;
    return new Palabra("hola");
  }
}
