import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { LogService } from 'src/app/services/log/log.service';
import { PuntajeJuego } from '../../class/puntaje-juego';
import { PreguntadosResultado } from './class/preguntados-resultado';
import { PreguntadosService } from './service/preguntados.service';

@Component({
  selector: 'app-juego-preguntados',
  templateUrl: './juego-preguntados.component.html',
  styleUrls: ['./juego-preguntados.component.scss'],
})
export class JuegoPreguntadosComponent implements OnInit {
  resultadoDelJuego?: PreguntadosResultado;
  rondaTerminada: boolean;
  juegoTerminado?: boolean;
  constructor(
    private preguntadosService: PreguntadosService,
    private log: LogService,
    private authService: AuthService
  ) {
    this.juegoTerminado = undefined;
    this.rondaTerminada = true;
  }

  ngOnInit(): void {}
  onEmpezarAJugar() {
    this.juegoTerminado = false;
    this.rondaTerminada = false;
  }
  onRondaTerminada(resultado: PreguntadosResultado) {
    this.resultadoDelJuego = resultado;
    this.rondaTerminada = true;
    if (this.resultadoDelJuego.cantidadDeAciertos > 0) {
      const puntaje: PuntajeJuego = {
        nombreJuego: 'Preguntados',
        puntaje: this.resultadoDelJuego.cantidadDeAciertos * 10,
        usuario: this.authService.currenUser!,
      };
      this.log.savePuntajeJuegos(puntaje);
    }
  }
  onProximaPreguntaEvent() {
    this.juegoTerminado = false;
    this.rondaTerminada = false;
  }
  onUserLose(resultado: PreguntadosResultado) {
    this.resultadoDelJuego = resultado;
    this.rondaTerminada = true;
    this.juegoTerminado = true;
    // if (this.resultadoDelJuego.cantidadDeAciertos > 0) {
    //   console.log('entro2');
    //   const puntaje: PuntajeJuego = {
    //     nombreJuego: 'Preguntados',
    //     puntaje: this.resultadoDelJuego.cantidadDeAciertos * 10,
    //     usuario: this.authService.currenUser!,
    //   };
    //   this.log.savePuntajeJuegos(puntaje);
    // }
  }
  onPlayAgain() {
    this.preguntadosService.resetGameParameters();
    this.juegoTerminado = undefined;
    this.rondaTerminada = true;
  }
}
