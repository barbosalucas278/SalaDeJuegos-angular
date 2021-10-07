import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { AdivinaColorResultados } from '../../services/adivina-color-resultados';
import { AdivinaColorService } from '../../services/adivina-color.service';
import { Color } from '../../services/color';
import { interval, Observable, Subscription, timer } from 'rxjs';
import { take } from 'rxjs/operators';
import { addSyntheticLeadingComment } from 'typescript';

@Component({
  selector: 'app-juego-adivina-color-container',
  templateUrl: './juego-adivina-color-container.component.html',
  styleUrls: ['./juego-adivina-color-container.component.scss'],
})
export class JuegoAdivinaColorContainerComponent implements OnInit {
  @Output() userLoseEvent = new EventEmitter<AdivinaColorResultados>();
  vidas!: number;
  timer!: number;
  contador: Observable<number>;
  cantidadDeAciertos: number;
  suscribe?: Subscription;
  colorEnJuego: Color;
  nombreColorEnJuego: Color;
  jugadorAcierta?: boolean;
  jugadorEligioCoincide?: boolean;
  juegoTerminado?: boolean;
  terminoRonda?: boolean;
  constructor(private adivinaColorService: AdivinaColorService) {
    this.timer = 4;
    this.contador = interval(1000);

    this.cantidadDeAciertos = 0;
    this.juegoTerminado = false;
    this.terminoRonda = false;

    this.vidas = adivinaColorService.vidasRestantes;
    this.nombreColorEnJuego = { color: '', nombreColor: '' };
    this.colorEnJuego = { color: '', nombreColor: '' };
    this.setColor();
    this.arrancarcontador();
    this.subscribeEventCeroVidas();
    this.subscribeEventVidasChanged();
  }
  /**Setter Vidas para que no sean negativas */
  setVidas(value: number) {
    if (value >= 0) {
      this.vidas = value;
    }
  }
  setColor() {
    this.nombreColorEnJuego.nombreColor = this.adivinaColorService.getColor();
    this.colorEnJuego.nombreColor = this.adivinaColorService.getNombreColor();
    this.colorEnJuego.color = this.adivinaColorService.getColor();
  }
  arrancarcontador() {
    this.suscribe = this.contador.pipe(take(4)).subscribe((n) => {
      if (this.timer == 0 || this.terminoRonda) {
        this.suscribe!.unsubscribe();
      } else {
        this.timer--;
      }
    });

    setTimeout(() => {
      console.log(this.terminoRonda);

      if (!this.terminoRonda) {
        this.lanzarProximoColor();
        this.adivinaColorService.restarVida();
      } else {
        this.lanzarProximoColor();
      }
    }, 4000);
  }
  subscribeEventCeroVidas() {
    this.adivinaColorService.ceroVidasEvent.subscribe(() => {
      this.setVidas(0);
      this.juegoTerminado = true;
      this.mostrarResultadoDelJuego();
    });
  }
  subscribeEventVidasChanged() {
    this.adivinaColorService.vidasChangedEvent.subscribe((x) => {
      this.setVidas(x);
    });
  }
  onJugadorEleccion(coincide: boolean) {
    this.terminoRonda = true;
    if (coincide) {
      this.jugadorEligioCoincide = true;
    } else {
      this.jugadorEligioCoincide = false;
    }
    this.verificareleccion();
  }
  verificareleccion() {
    if (this.colorEnJuego.color == this.nombreColorEnJuego.nombreColor) {
      if (!this.jugadorEligioCoincide) {
        this.adivinaColorService.restarVida();
        this.jugadorAcierta = false;
      } else {
        this.cantidadDeAciertos++;
        this.jugadorAcierta = true;
      }
    } else if (this.colorEnJuego.color != this.nombreColorEnJuego.nombreColor) {
      if (this.jugadorEligioCoincide) {
        this.adivinaColorService.restarVida();
        this.jugadorAcierta = false;
      } else {
        this.cantidadDeAciertos++;
        this.jugadorAcierta = true;
      }
    }
    // setTimeout(() => {
    //   this.lanzarProximoColor();
    // }, 3000);
  }

  lanzarProximoColor() {
    this.terminoRonda = false;
    this.timer = 4;
    this.jugadorAcierta = undefined;
    console.log('Lanzar proximo color');

    this.setColor();
    this.arrancarcontador();
  }

  mostrarResultadoDelJuego() {
    const resultado: AdivinaColorResultados = {
      cantidadDeAciertos: this.cantidadDeAciertos,
    };
    this.userLoseEvent.emit(resultado);
  }
  ngOnInit(): void {}
}
