import { HttpClient } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { Carta } from '../class/carta';
import { CartasEnJuego } from '../class/cartas-en-juego';

@Injectable({
  providedIn: 'root',
})
export class MayorMenorService {
  vidasRestantes!: number;
  vidasChangedEvent: EventEmitter<number> = new EventEmitter();
  ceroVidasEvent = new EventEmitter();

  constructor(private http: HttpClient) {
    this.vidasRestantes = 3;
  }
  resetGameParameters() {
    this.vidasRestantes = 3;
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
  async getCartas() {
    const url = 'https://deckofcardsapi.com/api/deck/new/draw/?count=2';
    let resultado = this.http.get<any>(url).pipe(
      map((response) => {
        let cartaEnJuego = response.cards[0];
        let cartaOculta = response.cards[1];
        let cartas: CartasEnJuego = {
          cartaEnJuego: new Carta(cartaEnJuego.image, cartaEnJuego.code),
          cartaOculta: new Carta(cartaOculta.image, cartaOculta.code),
        };
        return cartas;
      })
    );
    const cartasEnJuego: CartasEnJuego = await resultado
      .toPromise()
      .then((cartas) => {
        return cartas;
      });
    return cartasEnJuego;
  }
}
