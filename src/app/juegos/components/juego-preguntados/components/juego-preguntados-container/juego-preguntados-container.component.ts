import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
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
  @Output() rondaTerminadaEvent = new EventEmitter();

  @Input() rondaTerminada: boolean;

  vidas!: number;
  cantidadDeAciertos: number;
  preguntaEnJuego!: Preguntados;
  indiceCorrecto?: number;
  opciones: string[];
  jugadorAcierta: boolean;
  terminoRonda?: boolean;
  constructor(private preguntadosService: PreguntadosService) {
    this.jugadorAcierta = false;
    this.opciones = [];
    this.preguntaEnJuego = {
      opcionCorrecta: '',
      urlImg: '',
      opcionesIncorrectas: [],
    };
    this.cantidadDeAciertos = 0;
    this.rondaTerminada = false;
    this.vidas = preguntadosService.vidasRestantes;
    this.subscribeEventCeroVidas();
    this.subscribeEventVidasChanged();
    this.setPreguntaEnJuego();
  }
  /**Setter Vidas para que no sean negativas */
  setVidas(value: number) {
    if (value >= 0) {
      this.vidas = value;
    }
  }
  /**Llama al service depreguntas */
  setPreguntaEnJuego() {
    this.preguntadosService.OpcionCorrectaEvent.subscribe((opcion) => {
      this.preguntaEnJuego.opcionCorrecta = opcion.opcionCorrecta;
      this.preguntaEnJuego.urlImg = opcion.urlImg;
      this.opciones.push(this.preguntaEnJuego.opcionCorrecta!);
    });
    this.preguntadosService.OpcionesIncorrectasEvent.subscribe((opcion) => {
      this.preguntaEnJuego.opcionesIncorrectas?.push(opcion);
      this.opciones.push(opcion);
      this.indiceCorrecto = this.opciones.indexOf(opcion);
    });
  }

  subscribeEventCeroVidas() {
    this.preguntadosService.ceroVidasEvent.subscribe(() => {
      this.mostrarOpcionCorrecta();
      setTimeout(() => {
        this.setVidas(0);
        this.mostrarResultadoDelJuego();
      }, 2000);
    });
  }
  subscribeEventVidasChanged() {
    this.preguntadosService.vidasChangedEvent.subscribe((x) => {
      this.setVidas(x);
    });
  }
  onJugadorEleccion(e: any) {
    const indice = e.target.id;
    const i = parseInt(indice.replace('opcion', ''));

    if (i == this.indiceCorrecto) {
      this.jugadorAcierta = true;
    } else {
      this.jugadorAcierta = false;
    }

    this.verificareleccion();
  }
  verificareleccion() {
    this.rondaTerminada = true;
    this.mostrarOpcionCorrecta();
    if (!this.jugadorAcierta) {
      this.preguntadosService.restarVida();
      this.jugadorAcierta = false;
    } else {
      this.cantidadDeAciertos++;
      this.jugadorAcierta = true;
    }
    setTimeout(() => {
      const resultado: PreguntadosResultado = {
        cantidadDeAciertos: this.cantidadDeAciertos,
      };
      this.rondaTerminadaEvent.emit(resultado);
    }, 2000);
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
  /**Funcion que hay que invocar cuando queremos empezar otra ronda */
  lanzarProximaPregunta() {
    this.resetearVariablesDelJuego();
    this.preguntadosService.getOpcionCorrecta();
    this.preguntadosService.getOpcionesIncorrectas();
  }
  /**Resetea las variables del juego */
  resetearVariablesDelJuego() {
    this.jugadorAcierta = false;
    this.indiceCorrecto = -1;
    this.opciones = [];
    this.preguntaEnJuego = {
      opcionCorrecta: '',
      urlImg: '',
      opcionesIncorrectas: [],
    };
    this.rondaTerminada = false;
  }
  /**Emite el evento que avisa que se termino la ronda indicando estadisticas del juego */
  mostrarResultadoDelJuego() {
    const resultado: PreguntadosResultado = {
      cantidadDeAciertos: this.cantidadDeAciertos,
    };
    this.userLoseEvent.emit(resultado);
  }
  ngOnInit(): void {}
  ngOnChanges() {
    if (!this.rondaTerminada) {
      setTimeout(() => {
        this.lanzarProximaPregunta();
      }, 2000);
    }
  }
}
