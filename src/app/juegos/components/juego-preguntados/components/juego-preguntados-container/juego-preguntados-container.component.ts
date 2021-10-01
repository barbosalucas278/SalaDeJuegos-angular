import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Preguntados } from '../../class/preguntados';
import { PreguntadosResultado } from '../../class/preguntados-resultado';
import { PreguntadosService } from '../../service/preguntados.service';

@Component({
  selector: 'app-juego-preguntados-container',
  templateUrl: './juego-preguntados-container.component.html',
  styleUrls: ['./juego-preguntados-container.component.scss'],
})
export class JuegoPreguntadosContainerComponent implements OnInit {
  @Output() userLoseEvent = new EventEmitter<PreguntadosResultado>();

  vidas!: number;
  cantidadDeAciertos: number;
  preguntaEnJuego?: Preguntados;
  opcion1?: string;
  opcion2?: string;
  opcion3?: string;
  opcion4?: string;
  terminoRonda?: boolean;
  constructor(private preguntadosService: PreguntadosService) {
    this.cantidadDeAciertos = 0;
    this.terminoRonda = false;
    this.vidas = preguntadosService.vidasRestantes;
    this.subscribeEventCeroVidas();
    this.subscribeEventVidasChanged();
  }
  /**Setter Vidas para que no sean negativas */
  setVidas(value: number) {
    if (value >= 0) {
      this.vidas = value;
    }
  }
  /**Llama al service depreguntas */
  async setPreguntaEnJuego() {
    return this.preguntadosService.getPregunta().then((pregunta) => {
      this.preguntaEnJuego = pregunta;
      this.crearOpciones();
    });
  }
  crearOpciones() {
    let cantidadDeOpciones = 4;
    let opciones = [
      this.preguntaEnJuego?.opcionesIncorrectas,
      this.preguntaEnJuego?.opcionCorrecta,
    ];
    console.log(opciones);
  }
  subscribeEventCeroVidas() {
    this.preguntadosService.ceroVidasEvent.subscribe(() => {
      this.setVidas(0);
      this.mostrarResultadoDelJuego();
    });
  }
  subscribeEventVidasChanged() {
    this.preguntadosService.vidasChangedEvent.subscribe((x) => {
      this.setVidas(x);
    });
  }
  // onJugadorEleccion(mayor: boolean) {
  //   if (mayor) {
  //     this.jugadorEligioMayor = true;
  //   } else {
  //     this.jugadorEligioMayor = false;
  //   }
  //   this.verificareleccion();
  // }
  // verificareleccion() {
  //   this.terminoRonda = true;
  //   this.mostrarCartaTapada();
  //   if (this.cartaEnJuego!.valor >= this.cartaOculta.valor) {
  //     if (this.jugadorEligioMayor) {
  //       this.mayorMenorService.restarVida();
  //       this.jugadorAcierta = false;
  //     } else {
  //       this.cantidadDeAciertos++;
  //       this.jugadorAcierta = true;
  //     }
  //   } else if (this.cartaEnJuego!.valor <= this.cartaOculta.valor) {
  //     if (this.jugadorEligioMayor) {
  //       this.cantidadDeAciertos++;
  //       this.jugadorAcierta = true;
  //     } else {
  //       this.mayorMenorService.restarVida();
  //       this.jugadorAcierta = false;
  //     }
  //   }
  //   setTimeout(() => {
  //     this.lanzarProximaCarta();
  //   }, 2000);
  // }
  // mostrarCartaTapada() {
  //   this.cartaBocaAbajo = this.cartaOculta.url;
  // }
  /**Funcion que hay que invocar cuando queremos empezar otra ronda */
  lanzarProximaPregunta() {
    this.setPreguntaEnJuego().then(() => this.resetearVariablesDelJuego());
  }
  /**Resetea las variables del juego */
  resetearVariablesDelJuego() {
    this.terminoRonda = false;
  }
  /**Emite el evento que avisa que se termino la ronda indicando estadisticas del juego */
  mostrarResultadoDelJuego() {
    const resultado: PreguntadosResultado = {
      cantidadDeAciertos: this.cantidadDeAciertos,
    };
    this.userLoseEvent.emit(resultado);
  }
  ngOnInit(): void {
    this.setPreguntaEnJuego();
  }
}
