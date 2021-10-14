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
  juegoTerminado: boolean;
  /**
   *
   */
  constructor(
    private logService: LogService,
    private authService: AuthService,
    private preguntadosService:PreguntadosService
  ) {
    this.juegoTerminado = false;
  }
  onPlayAgain() {
    this.juegoTerminado = false;
    this.resultadoDelJuego = undefined;
    this.preguntadosService.resetGameParameters();
  }
  onUserLose(resultado: PreguntadosResultado) {
    this.resultadoDelJuego = resultado;
    this.juegoTerminado = true;
    if (this.resultadoDelJuego.cantidadDeAciertos > 0) {
      const puntaje: PuntajeJuego = {
        nombreJuego: 'Preguntados',
        puntaje: this.resultadoDelJuego.cantidadDeAciertos * 10,
        usuario: this.authService.currenUser!,
      };
      this.logService.savePuntajeJuegos(puntaje);
    }
  }
  ngOnInit(): void {}
}
