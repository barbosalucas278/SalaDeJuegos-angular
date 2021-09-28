import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Carta } from '../class/carta';
import { CartasEnJuego } from '../class/cartas-en-juego';
import { MayorMenorResultado } from '../class/mayor-menor-resultado';
import { MayorMenorService } from '../services/mayor-menor.service';

@Component({
  selector: 'app-mayor-menor-container',
  templateUrl: './mayor-menor-container.component.html',
  styleUrls: ['./mayor-menor-container.component.scss'],
})
export class MayorMenorContainerComponent implements OnInit {
  private readonly urlImagenDorso = '../../../../../assets/dorso_carta.png';
  @Output() userLoseEvent = new EventEmitter<MayorMenorResultado>();

  cartaBocaAbajo: string;

  vidas!: number;
  cantidadDeAciertos: number;
  cartaEnJuego?: Carta;
  cartaOculta!: Carta;

  jugadorEligioMayor?: boolean;
  jugadorAcierta?: boolean;
  terminoRonda?: boolean;
  constructor(private mayorMenorService: MayorMenorService) {
    this.cantidadDeAciertos = 0;
    this.terminoRonda = false;
    this.cartaBocaAbajo = this.urlImagenDorso;
    this.vidas = mayorMenorService.vidasRestantes;
    this.setCartas();
    this.subscribeEventCeroVidas();
    this.subscribeEventVidasChanged();
  }
  /**Setter Vidas para que no sean negativas */
  setVidas(value: number) {
    if (value >= 0) {
      this.vidas = value;
    }
  }
  async setCartas() {
    return this.mayorMenorService.getCartas().then((cartasEnJuego) => {
      this.cartaEnJuego = cartasEnJuego.cartaEnJuego;
      this.cartaOculta = cartasEnJuego.cartaOculta;
    });
  }
  subscribeEventCeroVidas() {
    this.mayorMenorService.ceroVidasEvent.subscribe(() => {
      this.setVidas(0);
      this.mostrarResultadoDelJuego();
    });
  }
  subscribeEventVidasChanged() {
    this.mayorMenorService.vidasChangedEvent.subscribe((x) => {
      this.setVidas(x);
    });
  }
  onJugadorEleccion(mayor: boolean) {
    if (mayor) {
      this.jugadorEligioMayor = true;
    } else {
      this.jugadorEligioMayor = false;
    }
    this.verificareleccion();
  }
  verificareleccion() {
    this.terminoRonda = true;
    this.mostrarCartaTapada();
    if (this.cartaEnJuego!.valor >= this.cartaOculta.valor) {
      if (this.jugadorEligioMayor) {
        this.mayorMenorService.restarVida();
        this.jugadorAcierta = false;
      } else {
        this.cantidadDeAciertos++;
        this.jugadorAcierta = true;
      }
    } else if (this.cartaEnJuego!.valor <= this.cartaOculta.valor) {
      if (this.jugadorEligioMayor) {
        this.cantidadDeAciertos++;
        this.jugadorAcierta = true;
      } else {
        this.mayorMenorService.restarVida();
        this.jugadorAcierta = false;
      }
    }
    setTimeout(() => {
      this.lanzarProximaCarta();
    }, 2000);
  }
  mostrarCartaTapada() {
    this.cartaBocaAbajo = this.cartaOculta.url;
  }
  lanzarProximaCarta() {
    this.setCartas().then(() => this.resetearVariablesDelJuego());
  }
  resetearVariablesDelJuego() {
    this.cartaBocaAbajo = this.urlImagenDorso;
    this.jugadorAcierta = undefined;
    this.jugadorEligioMayor = undefined;
    this.terminoRonda = false;
  }
  mostrarResultadoDelJuego() {
    const resultado: MayorMenorResultado = {
      cantidadDeAciertos: this.cantidadDeAciertos,
    };
    this.userLoseEvent.emit(resultado);
  }
  ngOnInit(): void {}
}
