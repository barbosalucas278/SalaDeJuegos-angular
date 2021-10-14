import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
} from '@angular/core';
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
  opciones: string[];
  preguntaEnJuego: Preguntados;
  indiceCorrecto: number;
  opcionElegida: number;
  /**
   *
   */
  constructor(private preguntadosServices: PreguntadosService) {
    this.vidas = preguntadosServices.vidasRestantes;
    this.opciones = [];
    this.preguntaEnJuego = {};
    this.indiceCorrecto = -1;
    this.opcionElegida = -1;
    this.subscribeEventCeroVidas();
    this.subscribeEventVidasChanged();
  }

  /**Setter Vidas para que no sean negativas */
  setVidas(value: number) {
    if (value >= 0) {
      this.vidas = value;
    }
  }
  subscribeEventCeroVidas() {
    this.preguntadosServices.ceroVidasEvent.subscribe(() => {
      this.setVidas(0);
      this.mostrarResultadoDelJuego();
    });
  }
  /**Emite el evento que avisa que se termino la ronda indicando estadisticas del juego */
  mostrarResultadoDelJuego() {
    const resultado: PreguntadosResultado = {
      cantidadDeAciertos: this.preguntaEnJuego.respuestaCorrecta! ? 1 : 0,
      usuarioGano: this.preguntaEnJuego.respuestaCorrecta!,
    };
    this.userLoseEvent.emit(resultado);
  }
  subscribeEventVidasChanged() {
    this.preguntadosServices.vidasChangedEvent.subscribe((x) => {
      this.setVidas(x);
    });
  }
  onJugadorEleccion(e: any) {
    const indice = e.target.id;
    const i = parseInt(indice.replace('opcion', ''));

    this.opcionElegida = i;

    this.verificarEleccion();
  }
  verificarEleccion() {
    this.mostrarOpcionCorrecta();
    setTimeout(() => {
      if (this.opcionElegida == this.indiceCorrecto) {
        // this.cantidadDeAciertos++;
        this.preguntaEnJuego.respuestaCorrecta = true;
      } else {
        this.preguntaEnJuego.respuestaCorrecta = false;
      }
      this.preguntadosServices.restarVida();
    }, 1500);
  }
  mostrarOpcionCorrecta() {
    this.opciones.forEach((opcion, index) => {
      const buttonIncorrecto = document.getElementById(`opcion${index}`);
      buttonIncorrecto?.classList.remove('btn-light');
      buttonIncorrecto?.classList.add('btn-danger');
    });
    const buttonCorrecto = document.getElementById(
      `opcion${this.indiceCorrecto}`
    );
    buttonCorrecto?.classList.remove('btn-danger');
    buttonCorrecto?.classList.add('btn-success');
  }
  ngOnInit() {
    this.preguntadosServices.armarPregunta().then((pregunta) => {
      this.preguntaEnJuego = pregunta;
    });
    setTimeout(() => {
      setTimeout(() => {
        const incorrectas = this.preguntaEnJuego.opcionesIncorrectas;
        this.opciones.push(...incorrectas!);
      }, generarNumeroRandom());
      setTimeout(() => {
        this.opciones.push(this.preguntaEnJuego.opcionCorrecta!);
        this.indiceCorrecto = this.opciones.indexOf(
          this.preguntaEnJuego.opcionCorrecta!
        );
      }, generarNumeroRandom());
    }, 3500);
  }
}
/**Genera un numero aleatorio, pudiendo indicar un numero a evitar */
function generarNumeroRandom(numeroAEvitar: any = null) {
  const decimales = 100;
  let random = Math.floor(Math.random() * (Math.random() * decimales));

  if (numeroAEvitar != null) {
    while (random == numeroAEvitar) {
      random = Math.floor(Math.random() * (Math.random() * decimales));
    }
    return random;
  }
  return random;
}
